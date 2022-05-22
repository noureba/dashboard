import React, { useContext } from "react";
import SideBar from "./SideBar";
import { Data } from "../utils/Store";
import Header from "./Header";

function Layout({ children }) {
  const { state } = useContext(Data);
  return (
    <div className="layout">
        <div>
          <SideBar />
        </div>
        <div className={`${state ? "hide" : "show"} mobile `}>
          <div>
          <Header />
          </div>
          <div>{children}</div>
        </div>
    </div>
  );
}

export default Layout;
