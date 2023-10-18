import { MainContainer, FrameRectangle } from '../SharedComponents';

function Frame({ variant, children }) {
    return (
        <MainContainer>
            {variant === 'default' ? (
                <FrameRectangle>
                    <div className="line top-left"></div>
                    <div className="line top-right"></div>
                    <div className="line bottom-left"></div>
                    {children}
                </FrameRectangle>
            ) : (
                <></>
            )}
        </MainContainer>
    );
}

export default Frame;
