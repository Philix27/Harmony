import React from "react";
import users from "../../data/users.json";
import { MdDelete } from "react-icons/md";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcApproval, FcDisapprove } from "react-icons/fc";

export default function UsersSection({ activeIndex }) {
  const onDelete = (agent) => {};
  return (
    <div className={activeIndex == 4 ? "users" : "none"}>
      <div className="products">
        <h2>All Users</h2>
        <h4 href="/">ADMIN</h4>
        <div className="tableSection">
          <div className="input"></div>
          <table>
            <thead>
              <tr>
                <th>No</th>

                <th>Name</th>
                <th>Status</th>

                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((agent, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{agent.name}</td>
                  <td>{agent.status}</td>

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
