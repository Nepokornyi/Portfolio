export const cloudVertexShader = /* glsl */ `
    uniform float uTime;
    uniform vec2 uResolution; // canvas size in device pixels
    uniform float uCellSize; // device pixels between the cells of the dot matrix
    uniform vec2 uCursorPixel; // device pixels from the bottom-left corner of the canvas
    uniform float uCursorStrength; // 0..1: fades in while the mouse is over the canvas
    uniform vec3 uTeal;
    uniform vec3 uCyan;
    uniform vec3 uDeepBlue;
    uniform vec3 uBlue;

    attribute float aBrightness;
    attribute float aRandom; // a fixed 0..1 value for each dot

    varying vec3 vColor;
    varying float vDotDiameter; // in device pixels
    varying float vIsOutline;

    const float CURSOR_RADIUS_CELLS = 10.0;
    const float PUSH_CELLS = 4.0; // how far the dots right under the cursor move
    const float HOLE_WOBBLE = 0.2; // the radius of the hole changes with the angle by up to ±20%
    const float HOLE_JITTER = 0.25; // each dot gets its own push, up to ±25%, for a ragged edge
    const float FLICKER_RATE = 6.0; // new off-dots per second
    const float OFF_SHARE = 0.03; // the share of dots that are off at a time
    // The cloud is a background, so it stays darker than the white text. Colors are in linear light:
    // 0.25 shows at about half the brightness
    const float BRIGHTNESS = 0.25;
    const float OUTLINE_SHARE = 0.03; // large outlined diamonds, like the timeline bullets
    const float DOT_SIZE = 0.018; // world units

    float hash(float value) {
        return fract(sin(value * 78.233) * 43758.5453);
    }

    // -1..1: a slow wave around the cursor, so the hole is a blob that changes its shape
    float getHoleWobble(vec2 awayFromCursor) {
        float angle = atan(awayFromCursor.y, awayFromCursor.x);
        return 0.5 * sin(angle * 3.0 + uTime * 0.9)
            + 0.3 * sin(angle * 5.0 - uTime * 1.3)
            + 0.2 * sin(angle * 2.0 + uTime * 0.6);
    }

    // The colors of the design in their order: teal → cyan → deep blue → blue
    vec3 getRampColor(float progress) {
        vec3 color = mix(uTeal, uCyan, smoothstep(0.0, 0.33, progress));
        color = mix(color, uDeepBlue, smoothstep(0.33, 0.66, progress));
        return mix(color, uBlue, smoothstep(0.66, 1.0, progress));
    }

    void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vec4 clipPosition = projectionMatrix * viewPosition;
        vec2 pixel = (clipPosition.xy / clipPosition.w * 0.5 + 0.5) * uResolution;

        // Dots near the cursor move away from it and leave a dark hole with an uneven edge
        vec2 awayFromCursor = pixel - uCursorPixel;
        float cursorDistance = length(awayFromCursor);
        float holeScale = 1.0 + HOLE_WOBBLE * getHoleWobble(awayFromCursor);
        float holeRadius = CURSOR_RADIUS_CELLS * uCellSize * holeScale;
        float push = uCursorStrength * (1.0 - smoothstep(0.0, holeRadius, cursorDistance));
        push *= 1.0 + HOLE_JITTER * (hash(aRandom * 29.1) * 2.0 - 1.0);
        pixel += awayFromCursor / max(cursorDistance, 0.001) * push * PUSH_CELLS * uCellSize * holeScale;

        // Each dot moves to the middle of its cell in a screen grid, like a dot-matrix display.
        // When the cloud moves, the dots jump from cell to cell
        pixel = (floor(pixel / uCellSize) + 0.5) * uCellSize;
        clipPosition.xy = (pixel / uResolution * 2.0 - 1.0) * clipPosition.w;
        gl_Position = clipPosition;

        // The colors go from left to right across the cloud, as on the service packs
        vColor = getRampColor(smoothstep(-1.8, 1.8, position.x)) * mix(0.25, 1.0, aBrightness) * BRIGHTNESS;

        vIsOutline = step(1.0 - OUTLINE_SHARE, hash(aRandom * 13.7));
        float dotSize = DOT_SIZE * (0.8 + 0.4 * hash(aRandom * 7.1)) * mix(1.0, 2.6, vIsOutline);
        // projectionMatrix[1][1] = 1 / tan(fov / 2) — turns a world size into device pixels
        vDotDiameter = dotSize * projectionMatrix[1][1] * 0.5 * uResolution.y / -viewPosition.z;

        // Digital noise: a few dots switch off for a moment. Size 0 makes the GPU skip them
        float isOn = step(OFF_SHARE, hash(aRandom * 91.7 + floor(uTime * FLICKER_RATE)));
        // One extra pixel for the smooth edge
        gl_PointSize = (vDotDiameter + 1.0) * isOn;
    }
`

export const cloudFragmentShader = /* glsl */ `
    varying vec3 vColor;
    varying float vDotDiameter;
    varying float vIsOutline;

    const float OUTLINE_PIXELS = 1.5;

    void main() {
        // A diamond with a sharp edge: |x| + |y| is the distance from the middle, in device pixels
        vec2 fromMiddle = gl_PointCoord - 0.5;
        float distanceInPixels = (abs(fromMiddle.x) + abs(fromMiddle.y)) * (vDotDiameter + 1.0);
        float radius = vDotDiameter * 0.5;
        float fill = clamp(radius - distanceInPixels + 0.5, 0.0, 1.0);
        float hole = clamp(radius - OUTLINE_PIXELS - distanceInPixels + 0.5, 0.0, 1.0);
        float opacity = fill - hole * vIsOutline;
        if (opacity <= 0.0) discard;

        gl_FragColor = vec4(vColor, opacity);
        #include <colorspace_fragment>
    }
`
