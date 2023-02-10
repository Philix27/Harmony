import React from "react";
import products from "../../data/products.json";
import { MdDelete } from "react-icons/md";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function ProductsSection({ activeIndex }) {
  const onDelete = (agent) => {};
  return (
    <div className={activeIndex == 5 ? "users" : "none"}>
      <div className="products">
        <h2>All Products</h2>
        <h4 href="/">ADMIN</h4>
        <div className="tableSection">
          <div className="input"></div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Dosage Form</th>
                <th>unit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((agent, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{agent.name}</td>
                  <td>{agent.dosageForm}</td>
                  <td>{agent.unit}</td>
                  <td>
                    <a onClick={() => onDelete(agent)}>
                      <AiFillDelete className="red icon" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
