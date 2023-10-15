import React from 'react'

interface PopupProps extends React.PropsWithChildren<{}> {
    className?: string;
    visible?: boolean;
    onHide?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Popup = (props: PopupProps) => {
    const { className = '', children, visible, onHide } = props;
    return (
        <div
            className={`fixed top-0 left-0 right-0 z-40 px-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100%] max-h-full bg-transparent ${!visible ? "hidden" : ""
                }`}
            onClick={onHide}
        >
            <div className="w-full h-full relative flex justify-center">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`${className} absolute border border-bb w-[257px] max-h-[342px] bg-white rounded-xl drop-shadow-xl ${!visible ? "hidden" : ""
                        }`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;
