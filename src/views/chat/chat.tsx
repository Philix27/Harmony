import React from "react";
import { MdGroups } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import products from "../../../data/products.json";
import styles from "./chat.view.module.scss";
import MsgSection from "../../comps/msgs/msgSection";
import TimeAgo from "timeago-react";

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
                  <div className={styles.contents}>
                    <div className={styles.nameImage}>
                      <img src="./images/profile.jpeg" alt="profile" />
                      <p>{product.name}</p>
                    </div>

                    <div className={styles.time}>
                      <TimeAgo live={true} datetime="1676079706801" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <MsgSection roomId={"writably"} />
    </div>
  );
}
