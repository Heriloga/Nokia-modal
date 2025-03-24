import { useContext } from "react";
import { GlobalModalContext } from "../components/GlobalModal/GlobalModalContext";

function useGlobalModalContext() {
  const modal = useContext(GlobalModalContext);

  if (modal === undefined) {
    throw Error("useModalContext must be used with a GlobalModalContext.");
  }

  return modal;
}

export default useGlobalModalContext;
