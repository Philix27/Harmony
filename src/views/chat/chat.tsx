import React from "react";
import { MdGroups } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import products from "../../../data/products.json";
import Conversation from "./conversation";
import styles from "./chat.view.module.scss";

export default function ChatSection({ activeIndex }) {
  return (
    <div className={activeIndex == 2 ? styles.container : "none"}>
      <div className={styles.products}>
        <div className={styles.list}>
          <div className={styles.topbar}>
            <MdGroups />
            <IoMdPersonAdd />
          </div>
          <ul>
            {products.map((product, index) => {
              return (
                <li key={index}>
                  <div>
                    <p>{product.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Conversation />
    </div>
  );
}
