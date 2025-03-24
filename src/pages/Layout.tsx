import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <div className="bg-gradient-to-r bg-radial-blue-teal h-screen flex flex-col justify-center items-center overflow-x-hidden ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
