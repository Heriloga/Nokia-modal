export const examples = [
  {
    title: "1. Setup - Modal Provider",
    desc: "Wrap the 'App' component with 'GlobalModalProvider'.",
    code: `
    // src/Main.tsx

    <GlobalModalProvider>
      <App />
    </GlobalModalProvider>`,
  },
  {
    title: "2. Setup - Modal Component",
    desc: "Render the 'GlobalModal' component in the 'App' component.",
    code: `
    // src/App.tsx

    import GlobalModal from "./components/GlobalModal/GlobalModal";

    const App = () => {
        return (
            // ...
            <GlobalModal />
            // ...
        );
    };
`,
  },
  {
    title: "3. Setup - Modal Hook",
    desc: "Import the 'useGlobalModalContext' hook into your desired component, and you're good to go!",
    code: `
    import useGlobalModalContext from "../../hooks/useGlobalModalContext";
    // ... 
    const { modals, currentModal, hasModals, openModal, closeLastModal, closeAllModals } = useGlobalModalContext();
    // ...
    `,
  },
  {
    title: "1. Example - Open Modal",
    desc: "Pass openModal to an onClick or click handler, and provide a title and content (either a string or JSX.Element). At least one is required.",
    code: `
    import useGlobalModalContext from "../../hooks/useGlobalModalContext";

    function Component() {
        const { openModal } = useGlobalModalContext();

        return (
            <button
                onClick={() =>
                    openModal({
                    title: <h1>Hello</h1>,
                    content: <p>Nice to meet you!</p>,
                    })
                }
            >
                Click me
            </button>
        );
    }
    `,
  },

  {
    title: "2. Example  - Close Modal",
    desc: "By default, each modal has a close button, which can be removed. If removed, clicking the background closes the modal. You can also use the closeAllModals and closeLastModal functions.",
    code: `
    import useGlobalModalContext from "../../hooks/useGlobalModalContext";

    function Settings() {
    const { openModal, closeLastModal, closeAllModals } = useGlobalModalContext();

        return (
            <>
            <ButtonPrimary
                content="Sign Out"
                handleClick={() =>
                openModal({
                    title: "Are you sure want to Sign Out?",
                    content: (
                    <>
                        <ButtonPrimary
                        content="Yes"
                        handleClick={() => closeAllModals()}
                        />
                        <ButtonSecondary
                        content="No"
                        handleClick={() => closeLastModal()}
                        />
                    </>
                    ),
                })
                }
            />
            </>
        );
    }
    `,
  },
  {
    title: "3. Example - Options",
    desc: "Options are optional.",
    code: `
    import useGlobalModalContext from "../../hooks/useGlobalModalContext";

    function Component() {
        const { openModal } = useGlobalModalContext();

        return (
            <button
                onClick={() =>
                    openModal({
                    title: <h1>Hello</h1>,
                    content: <p>Nice to meet you!</p>,
                    options: {
                        zIndex: 20, // default is 50
                        isCloseButtonVisible: false, // default is true
                    },
                    })
                }
            >
                Click me
            </button>
        );
    }
    `,
  },
];
