import { JSX } from "react";

type Content = JSX.Element | string;
type Title = JSX.Element | string;

export interface Options {
  isCloseButtonVisible?: boolean;
  zIndex: number;
}

export type GlobalModalType = {
  options?: Options;
} & ({ title: Title; content?: Content } | { content: Content; title?: Title });
