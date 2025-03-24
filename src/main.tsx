import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GlobalModalProvider from "./components/GlobalModal/GlobalModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalModalProvider>
      <App />
    </GlobalModalProvider>
  </StrictMode>
);
