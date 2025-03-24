import { ReactElement } from "react";
import useGlobalModalContext from "../../hooks/useGlobalModalContext";
import ButtonPrimary from "../Button/ButtonPrimary";
import UserForm from "../UserForm/UserForm";
import ButtonSecondary from "../Button/ButtonSecondary";
import abstractShapeImage from "../../assets/abstractShape.webp";

function Welcome(): ReactElement {
  const { openModal } = useGlobalModalContext();

  return (
    <div className=" ml-4 mr-4 bg-white flex flex-col justify-center items-center gap-4 p-5 rounded text-center relative">
      <img
        src={abstractShapeImage}
        className="animate-hover-anim absolute bottom-[-15rem] left-49 w-48 md:bottom-[9rem] lg:left-[29rem] lg:w-64"
      />
      <div>
        <h1 className="text-xl">
          Welcome to the <strong>Modal Universe</strong>!
        </h1>
        <h2 className="text-lg"> Be part of something amazing.</h2>
        <p className="m-4 text-left">
          Have you ever wondered why a modal is essential in your app?
          <br /> Let me explain...
        </p>
      </div>
      <div className="flex w-full justify-around">
        <ButtonPrimary
          content="I'm interested"
          handleClick={() =>
            openModal({
              title: "",
              content: <UserForm isLogin={false} />,
            })
          }
        />
        <ButtonSecondary
          content="Read more"
          handleClick={() =>
            openModal({
              title: "",
              content: <UserForm isLogin={false} />,
            })
          }
        />
      </div>
    </div>
  );
}

export default Welcome;
