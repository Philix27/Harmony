import React from "react";
import { useRouter } from "next/router";
import { RiHome5Fill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { BsChatFill } from "react-icons/bs";
import styles from "./sidebar.module.scss";
import Link from "next/link";

export default function SecSidebar({ activeIndex, setActiveIndex }) {
  const router = useRouter();
  const _path = router.pathname;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_start}>
        <ul className={styles.sidebar_start_list}>
          <Link
            className={styles.link}
            href="#"
            onClick={() => setActiveIndex(1)}
          >
            <li
              className={
                activeIndex == 1
                  ? styles.activeItem
                  : styles.sidebar_start_list_item
              }
            >
              <RiHome5Fill />
              <p>HOME</p>
            </li>
          </Link>
          <Link
            className={styles.link}
            href="#"
            onClick={() => setActiveIndex(2)}
          >
            <li
              className={
                activeIndex == 2
                  ? styles.activeItem
                  : styles.sidebar_start_list_item
              }
            >
              <BsChatFill />
              <p>CHAT</p>
            </li>
          </Link>

          <Link
            className={styles.link}
            href="#"
            onClick={() => setActiveIndex(3)}
          >
            <li
              className={
                activeIndex == 3
                  ? styles.activeItem
                  : styles.sidebar_start_list_item
              }
            >
              <HiViewGridAdd />
              <p>PROJECTS</p>
            </li>
          </Link>
          <Link
            className={styles.link}
            href="#"
            onClick={() => setActiveIndex(8)}
          >
            <li
              className={
                activeIndex == 8
                  ? styles.activeItem
                  : styles.sidebar_start_list_item
              }
            >
              <MdAdminPanelSettings />
              <p>GOALS</p>
            </li>
          </Link>
          <Link
            className={styles.link}
            href="#"
            onClick={() => setActiveIndex(9)}
          >
            <li
              className={
                activeIndex == 9
                  ? styles.activeItem
                  : styles.sidebar_start_list_item
              }
            >
              <MdAdminPanelSettings />
              <p>ACTIVITIES</p>
            </li>
          </Link>
          <Link
            className={styles.link}
            href="#"
            onClick={() => setActiveIndex(10)}
          >
            <li
              className={
                activeIndex == 10
                  ? styles.activeItem
                  : styles.sidebar_start_list_item
              }
            >
              <MdAdminPanelSettings />
              <p>SETTINGS</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
