import CloseIcon from "../icons/CloseIcon";
import useGlobalModalContext from "../../hooks/useGlobalModalContext";
import { createPortal } from "react-dom";
import { Options } from "./GlobalModalType";

const defaultOptions: Options = {
  isCloseButtonVisible: true,
  zIndex: 50,
};

function GlobalModal() {
  const { currentModal, hasModals, closeLastModal } = useGlobalModalContext();

  if (!hasModals) return null;

  const mergedOptions = { ...defaultOptions, ...currentModal.options };

  return createPortal(
    <dialog
      open
      role="dialog"
      aria-labelledby="modal-title"
      className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,_0,_0,_0.75)] flex justify-center items-center`}
      style={{ zIndex: mergedOptions.zIndex }}
      onClick={mergedOptions.isCloseButtonVisible ? () => {} : closeLastModal}
    >
      <div
        className="relative flex flex-col gap-3 items-center justify-center p-4 rounded-xl bg-white w-full md:w-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl text-blue-800 p-1 rounded-md">
          {currentModal.title}
        </h2>
        {currentModal.content}

        {mergedOptions.isCloseButtonVisible && (
          <button
            onClick={closeLastModal}
            className="absolute top-[0] right-[0] m-2"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </dialog>,
    document.getElementById("modal-root")!
  );
}

export default GlobalModal;
