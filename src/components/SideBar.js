import React,{useEffect, useState, useContext} from "react";
import {Data} from '../utils/Store'
import {
  BrowserRouter as Router,
  Routes ,
  NavLink,
  Link,
  Route,
} from "react-router-dom";
import {
  AiFillHome,
  AiFillDashboard,
  AiOutlineMenuFold,
  AiFillMail,
  AiOutlineUser,
  AiOutlineMessage,
  AiFillNotification,
  AiFillCloseCircle
} from "react-icons/ai";
import { SiSimpleanalytics, SiStaffbase } from "react-icons/si";
import { MdPointOfSale, MdFeedback, MdManageAccounts } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiStoreAlt } from "react-icons/bi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/css/sideBar.css";
import Home from '../pages/Home'
function SideBar() {

  const {state, setState} = useContext(Data)

  const handler = ()=>{
    setState(!state)
    console.log(state)
  }

  return (
    <div className="sidebar">
      <ProSidebar collapsed={state ? true : false } >
        <SidebarHeader>
          <div className="brand">
            <NavLink to='/' className={state? "logoM" : "logoD"}>My<span className="text-danger">Dash</span></NavLink>
            <i onClick={handler} className={state ? "hide": ""}><AiFillCloseCircle/></i>
          </div>
        </SidebarHeader>
        <Menu iconShape="round">
          <SubMenu
            title="Dashboard"
            icon={<AiFillDashboard />}
            defaultOpen={true}
          >
            <MenuItem icon={<AiFillHome />}>
            <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem icon={<SiSimpleanalytics />}>
              Analytics
              <NavLink to="/analytics" />
            </MenuItem>
            <MenuItem icon={<MdPointOfSale />}>
              Sales
              <NavLink to="/sales" />
            </MenuItem>
          </SubMenu>
          <SubMenu title="quick menu" icon={<AiOutlineMenuFold />} defaultOpen={true}>
            <MenuItem icon={<AiOutlineUser />}>
              Users <NavLink to="/users" />
            </MenuItem>
            <MenuItem icon={<BiStoreAlt />}>
              Products <NavLink to="/products" />
            </MenuItem>
            <MenuItem icon={<HiOutlineDocumentReport />}>
              Reports <NavLink to="/reports" />
            </MenuItem>
          </SubMenu>
          <SubMenu title="Notifications" icon={<AiFillNotification />} defaultOpen={false}>
            <MenuItem icon={<AiFillMail />}>
              Mail <NavLink to="/mail" />
            </MenuItem>
            <MenuItem icon={<MdFeedback />}>
              Feedback <NavLink to="/feedback" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>

    </div>
  );
}

export default SideBar;
