import { ReactElement, useState } from "react";
import UserForm from "../UserForm/UserForm";
import HamburgerIcon from "../icons/HamburgerIcon";
import { routes } from "./routes";
import SettingsIcon from "../icons/SettingsIcon";
import Settings from "../Settings/Settings";
import useGlobalModalContext from "../../hooks/useGlobalModalContext";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonPrimary from "../Button/ButtonPrimary";
import abstractShapeImage from "../../assets/abstractShape2.webp";
import { Link } from "react-router-dom";

function Navbar(): ReactElement {
  const { openModal } = useGlobalModalContext();
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="fixed top-0  border border-black lg:border-transparent bg-linear-navbar items-center justify-center flex p-4 w-full z-30">
      <div className="flex justify-between items-center xl:w-[1280px]  w-full flex-wrap lg:flex-nowrap">
        <div className="relative">
          <img
            src={abstractShapeImage}
            className="w-64 absolute bottom-[-2rem] left-4 opacity-60"
          />
          <span className="lg:text-xl text-md lg:text-white text-black font-bold">
            Modal Universe
          </span>
        </div>

        <button
          className="flex justify-end lg:hidden ring-1 ring-black rounded"
          onClick={showNav}
          name="menu"
        >
          <HamburgerIcon />
        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 lg:flex-row lg:w-auto lg:space-x-10 lg:flex`}
        >
          {routes.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link className="hover:text-blue-700" to={link.href}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`${
            toggle ? " flex" : " hidden"
          } mx-auto lg:mx-0 lg:flex lg:mt-0 items-center justify-around px-1 p-2 mt-4 w-64`}
        >
          <ButtonPrimary
            handleClick={() =>
              openModal({
                title: "",
                content: <UserForm isLogin={true} />,
              })
            }
            content="Log In"
          />

          <ButtonSecondary
            handleClick={() =>
              openModal({
                title: "",
                content: <UserForm isLogin={false} />,
              })
            }
            content="Sign Up"
          />

          <button
            className=""
            onClick={() =>
              openModal({
                title: "Settings",
                content: <Settings />,
              })
            }
          >
            <SettingsIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
