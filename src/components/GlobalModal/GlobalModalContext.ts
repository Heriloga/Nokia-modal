import { createContext } from "react";
import { GlobalModalContextType } from "./GlobalModalContextType";

export const GlobalModalContext = createContext<
  GlobalModalContextType | undefined
>(undefined);
