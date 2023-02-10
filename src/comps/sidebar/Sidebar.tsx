import React from "react";
import { useRouter } from "next/router";
import { RiHome5Fill } from "react-icons/ri";
import { MdMyLocation, MdAdminPanelSettings } from "react-icons/md";
import styles from "./sidebar.module.scss";

export default function Sidebar({ activeIndex, setActiveIndex }) {
  const router = useRouter();
  const _path = router.pathname;

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_start}>
          <ul className={styles.sidebar_start_list}>
            <li className={styles.brandName}>
              <span>
                <RiHome5Fill />
              </span>
              BRAND
            </li>

            <a
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
                <span>
                  <RiHome5Fill />
                </span>
                HOME
              </li>
            </a>
            <a
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
                <span>
                  <MdMyLocation />
                </span>
                POS
              </li>
            </a>

            <a
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
                <span>
                  <MdAdminPanelSettings />
                </span>
                ADMIN
              </li>
            </a>
            <a
              className={styles.link}
              href="#"
              onClick={() => setActiveIndex(4)}
            >
              <li
                className={
                  activeIndex == 3
                    ? styles.activeItem
                    : styles.sidebar_start_list_item
                }
              >
                <span>
                  <MdAdminPanelSettings />
                </span>
                USER
              </li>
            </a>
            <a
              className={styles.link}
              href="#"
              onClick={() => setActiveIndex(5)}
            >
              <li
                className={
                  activeIndex == 3
                    ? styles.activeItem
                    : styles.sidebar_start_list_item
                }
              >
                <span>
                  <MdAdminPanelSettings />
                </span>
                Products
              </li>
            </a>

            <a
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
                <span>
                  <MdAdminPanelSettings />
                </span>
                Tasks
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
