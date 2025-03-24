import { render, screen, fireEvent } from "@testing-library/react";
import GlobalModal from "./GlobalModal";
import useGlobalModalContext from "../../hooks/useGlobalModalContext";

jest.mock("../../hooks/useGlobalModalContext");

describe("GlobalModal", () => {
  const closeLastModal = jest.fn();

  const mockModalContext = (hasModals: boolean, options = {}) => {
    (useGlobalModalContext as jest.Mock).mockReturnValue({
      currentModal: {
        title: "Test Modal",
        content: <p>Test Content</p>,
        options,
      },
      hasModals,
      closeLastModal,
    });
  };

  beforeEach(() => {
    const modalRoot = document.createElement("div");
    modalRoot.id = "modal-root";
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    jest.clearAllMocks();
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      modalRoot.remove();
    }
  });

  it("should render the modal when hasModals is true", () => {
    mockModalContext(true);

    render(<GlobalModal />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should not render the modal when hasModals is false", () => {
    mockModalContext(false);

    render(<GlobalModal />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should show the close button when isCloseButtonVisible is true", () => {
    mockModalContext(true, { isCloseButtonVisible: true });

    render(<GlobalModal />);

    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("should hide the close button when isCloseButtonVisible is false", () => {
    mockModalContext(true, { isCloseButtonVisible: false });

    render(<GlobalModal />);

    const closeButton = screen.queryByRole("button");
    expect(closeButton).not.toBeInTheDocument();
  });

  it("should call closeLastModal when clicking on the close button", () => {
    mockModalContext(true, { isCloseButtonVisible: true });

    render(<GlobalModal />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(closeLastModal).toHaveBeenCalledTimes(1);
  });

  it("should call closeLastModal when clicking on the background when isCloseButtonVisible is false", () => {
    mockModalContext(true, { isCloseButtonVisible: false });

    render(<GlobalModal />);

    const modalBackground = screen.getByRole("dialog");
    fireEvent.click(modalBackground);

    expect(closeLastModal).toHaveBeenCalledTimes(1);
  });

  it("should apply custom zIndex when provided", () => {
    const customZIndex = 100;
    mockModalContext(true, { zIndex: customZIndex });

    render(<GlobalModal />);

    const dialogElement = screen.getByRole("dialog");
    expect(dialogElement).toHaveStyle(`z-index: ${customZIndex}`);
  });
});
