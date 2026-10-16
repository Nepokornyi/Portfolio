export const particlesVertexShader = /* glsl */ `
    uniform float uTime;
    uniform float uViewportHeight;
    uniform float uSweep; // 0..1
    uniform float uIsPrint; // 1 = the line builds the head: dots below it do not show yet
    uniform vec3 uViolet;
    uniform vec3 uBlue;
    uniform vec3 uCyan;

    attribute float aBrightness;
    attribute float aRandom; // a fixed 0..1 value for each dot

    varying vec3 vColor;
    varying float vOpacity;
    varying float vDotDiameter; // in device pixels

    // The head is 2.6 tall around 0 — the line starts just above it and ends just below it
    const float SWEEP_TOP = 1.4;
    const float SWEEP_BOTTOM = -1.4;
    const float LINE_WIDTH = 0.03;
    const float GLITCH_JUMP = 0.12;
    const float GLITCH_RATE = 20.0; // new jumps per second

    // World units — about 2.7 device pixels on desktop
    const float DOT_SIZE = 0.008;

    // Dark violet → blue → cyan. Colors are in linear light: 0.3 shows as about 58% brightness
    vec3 getPaletteColor(float brightness) {
        vec3 color = mix(uViolet * 0.04, uBlue * 0.3, smoothstep(0.0, 0.55, brightness));
        return mix(color, uCyan, smoothstep(0.55, 1.0, brightness));
    }

    void main() {
        vec3 point = position;
        float lineY = mix(SWEEP_TOP, SWEEP_BOTTOM, uSweep);
        // During the print, a dot shows once the line has reached its row
        float isBuilt = mix(1.0, step(lineY, point.y), uIsPrint);

        // The line is the row of dots under it: they jump sideways and glow cyan.
        // Outside a sweep the line is above the head, so no dot is on it
        float onLine = 1.0 - smoothstep(0.0, LINE_WIDTH, abs(point.y - lineY));
        float jump = fract(sin(aRandom * 78.233 + floor(uTime * GLITCH_RATE)) * 43758.5453) - 0.5;
        point.x += jump * GLITCH_JUMP * onLine;

        vec4 viewPosition = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * viewPosition;

        vColor = getPaletteColor(max(aBrightness, onLine));
        vOpacity = isBuilt;

        // projectionMatrix[1][1] = 1 / tan(fov / 2) — turns a world size into device pixels
        vDotDiameter = DOT_SIZE * projectionMatrix[1][1] * 0.5 * uViewportHeight / -viewPosition.z;
        // One extra pixel for the smooth edge. Dots that are not built get size 0, so the GPU skips them
        gl_PointSize = isBuilt > 0.0 ? vDotDiameter + 1.0 : 0.0;
    }
`

export const particlesFragmentShader = /* glsl */ `
    varying vec3 vColor;
    varying float vOpacity;
    varying float vDotDiameter;

    void main() {
        // Round dot with a smooth edge exactly 1 device pixel wide — sharp at any size
        float distanceInPixels = length(gl_PointCoord - 0.5) * (vDotDiameter + 1.0);
        float edge = clamp(vDotDiameter * 0.5 - distanceInPixels + 0.5, 0.0, 1.0);
        if (edge <= 0.0) discard;

        gl_FragColor = vec4(vColor, vOpacity * edge);
        #include <colorspace_fragment>
    }
`
