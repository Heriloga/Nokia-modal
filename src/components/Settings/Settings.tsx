import { ReactElement } from "react";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonPrimary from "../Button/ButtonPrimary";
import useGlobalModalContext from "../../hooks/useGlobalModalContext";

function Settings(): ReactElement {
  const { openModal, closeLastModal, closeAllModals } = useGlobalModalContext();

  return (
    <>
      <ButtonPrimary
        content="Sign Out"
        handleClick={() =>
          openModal({
            title: "Are you sure want to Sign Out?",
            content: (
              <div className="flex gap-10">
                <ButtonPrimary
                  content="Yes"
                  handleClick={() => closeAllModals()}
                />
                <ButtonSecondary
                  content="No"
                  handleClick={() => closeLastModal()}
                />
              </div>
            ),
          })
        }
      />
    </>
  );
}

export default Settings;
