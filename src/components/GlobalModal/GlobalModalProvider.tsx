import { ReactElement, ReactNode, useCallback, useState } from "react";
import { GlobalModalType } from "./GlobalModalType";
import { GlobalModalContext } from "./GlobalModalContext";

interface GlobalModalProps {
  children: ReactNode;
}

function GlobalModalProvider({ children }: GlobalModalProps): ReactElement {
  const [modals, setModals] = useState<GlobalModalType[]>([]);
  const hasModals = modals.length > 0;
  const currentModal = modals[modals.length - 1];

  const openModal = useCallback((modal: GlobalModalType) => {
    setModals((prev): GlobalModalType[] => [...prev, modal]);
  }, []);

  const closeLastModal = useCallback(() => {
    setModals((prev) => prev.slice(0, -1));
  }, []);

  const closeAllModals = useCallback(() => {
    setModals([]);
  }, []);

  return (
    <GlobalModalContext.Provider
      value={{
        hasModals,
        currentModal,
        modals,
        openModal,
        closeLastModal,
        closeAllModals,
      }}
    >
      {children}
    </GlobalModalContext.Provider>
  );
}

export default GlobalModalProvider;
