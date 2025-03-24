import { render, screen } from "@testing-library/react";
import GlobalModalContextProvider from "../src/components/GlobalModal/GlobalModalProvider";
import App from "./App";

jest.mock("./components/GlobalModal/GlobalModal", () => {
  return jest.fn(() => <div>Global Modal</div>);
});

describe("App", () => {
  it('should render Home component at the root path "/"', async () => {
    render(
      <GlobalModalContextProvider>
        <App />
      </GlobalModalContextProvider>
    );

    const allText = await screen.findAllByText("Modal Universe");
    expect(allText).toHaveLength(2);
  });
});
