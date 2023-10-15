import React, { PropsWithChildren } from "react";

// UI IMPORTS
import { Button } from "../buttons";
import Text from "../typography/Text";
import { Icon } from "../icons";

// TYPES
export interface ModalProps extends PropsWithChildren<{}> {
  className?: string;
  contentClassName?: string;
  bodyClassName?: string;
  title?: string;
  doneText?: string;
  cancelText?: string;
  children?: React.ReactNode;
  visible?: boolean;
  onHide?: (e: React.MouseEvent<HTMLElement>) => void;
  onDoneClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

/* ============================== MODEL ============================== */

const Modal = (props: ModalProps) => {
  const {
    className = "",
    bodyClassName = "",
    contentClassName = "",
    title,
    doneText = "Done",
    cancelText = "Cancel",
    children,
    visible = false,
    onHide,
    onDoneClick,
  } = props;

  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className={`${className} fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 h-[100%] max-h-full bg-black bg-opacity-40 ${
          visible ? "" : "hidden"
        }`}
        onClick={onHide}
      >
        <div className="w-full h-full relative flex justify-center">
          <div
            className={`${contentClassName} absolute max-w-[50%] tmd:max-w-[60%] tsm:max-w-[70%] top-[15%] w-full max-h-full bg-white rounded-lg shadow`}
            onClick={(e: any) => e.stopPropagation()}
          >
            <div className="flex flex-col items-start">
              <div className="w-full">
                <div className=" py-2 px-2 flex items-center w-full justify-between">
                  <Text className="font-bold text-lg dark:!text-primary-800">
                    {title}
                  </Text>
                  <Icon name="Close" fill="black" onClick={onHide} />
                </div>
                <div
                  className={`${bodyClassName} border-t-2 border-bb overflow-y-scroll`}
                >
                  {children}
                </div>
              </div>
            </div>
            {onDoneClick && (
              <div className="py-3 px-4 gap-4 w-full flex items-center justify-end">
                <Button onClick={onHide}>{cancelText}</Button>
                <Button onClick={onDoneClick}>{doneText}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
