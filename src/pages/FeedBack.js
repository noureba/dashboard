import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai"
import { users } from "../data/user";
import { Rating } from 'react-simple-star-rating'
import "../styles/css/Users.css";

function Users() {
  return (
    <div className="users ">
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
            Reviews{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
            Comment{" "}
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
              <td><Rating initialValue={e.rate} allowHover={false} size={20} /></td>
              <td>{e.comment}</td>
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
