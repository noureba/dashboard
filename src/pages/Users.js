import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai"
import { users } from "../data/user";

import "../styles/css/Users.css";

function Users() {
  return (
    <div className="users ">
      <button className="btn btn-primary my-3">Add New User</button>
      <div >
      <table className="table table-striped table-bordered ">
        <thead>
          <tr>
            <th scope="col">
              Id{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
              Profil{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
              Full Name{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
              Email{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
              Satuts{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => (
            <tr key={e.id}>
              <th>{e.id}</th>
              <td><img src={e.profil} style={{width:"50px"}}/></td>
              <td>{e.FullName}</td>
              <td>{e.Email}</td>
              <td className="text-success">{e.status}</td>
              <td className="text-danger text-center fs-4"><AiFillDelete/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default Users;
