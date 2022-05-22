import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai"
import { mail } from "../data/user";
import "../styles/css/Users.css";

function Mail() {
  return (
    <div className="users ">
      <div >
      <table className="table table-bordered table-hover">
        <tbody>
          {mail.map((e) => (
            <tr key={e.id}>
              <td>{e.FullName}</td>
              <td>{e.subject} - {e.message.slice(0,80)}...</td>
              <td className="text-danger text-center fs-4"><AiFillDelete/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default Mail;
