import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai"
import { products } from "../data/user";
import "../styles/css/Users.css";

function Products() {
  return (
    <div className="users ">
      <button className="btn btn-primary my-3">Add New Product</button>
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
              Product{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
              Title{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
              Price{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
            <th scope="col">
            category{" "}
              <i>
                <BiSortAlt2 />
              </i>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((e) => (
            <tr key={e.id}>
              <th>{e.id}</th>
              <td><img src={e.image} style={{width:"50px", height :"50px"}}/></td>
              <td>{e.title.slice(0,20)}...</td>
              <td className="text-success">{e.price}$</td>
              <td >{e.category}</td>
              <td className="text-danger text-center fs-4"><AiFillDelete/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default Products;
