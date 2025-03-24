import { GlobalModalType } from "./GlobalModalType";

export interface GlobalModalContextType {
  modals: GlobalModalType[];
  currentModal: GlobalModalType;
  hasModals: boolean;
  openModal: (modal: GlobalModalType) => void;
  closeLastModal: () => void;
  closeAllModals: () => void;
}
