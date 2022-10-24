import React, { MouseEventHandler } from "react";

type ModalProps = {
  open: boolean;
  toggleModal: MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
  modalClass?: string;
};

const Modal = ({ open, toggleModal, children, modalClass }: ModalProps) => {
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {open ? (
        <div
          className="absolute top-0 left-0 z-50 grid h-screen w-screen cursor-default place-items-center bg-[rgba(0,0,0,0.74)]"
          onClick={toggleModal}
        >
          <div
            className={`cursor-default rounded-xl bg-white animate-scl absolute p-5 ${modalClass} `}
            onClick={handleModalClick}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
