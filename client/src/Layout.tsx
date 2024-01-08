import Navbar from "./components/navbar/Navbar";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}