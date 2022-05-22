import React, { useContext} from "react";
import { Data } from "../utils/Store";
import {AiOutlineMenuFold} from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { users } from "../data/user";
import "../styles/css/header.css";

function Header() {
  const {state, setState} = useContext(Data)

  const handler = ()=>{
    setState(!state)
  }
  
  return (
    <div className="header">
      <div  onClick={handler}>
        <i className="fs-2 barMenu">
           <AiOutlineMenuFold/>
        </i>
      </div>
      <div className="menu">
        <div className="lan mx-4">
          <i>
            <GrLanguage />
          </i>
        </div>
        <div className="Notification mx-4">
          <i>
            <IoMdNotificationsOutline />
          </i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">6</span>
        </div>
        <div className="profil mx-4">
          <img src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png" />
          <p>Laila</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
