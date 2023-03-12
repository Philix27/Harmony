import React from "react";
import { FaCircle, FaUserCircle } from "react-icons/fa";
import GoalItem from "../../comps/goalItem/goalItem";
import styles from "./settings.module.scss";
import { BsCircleHalf } from "react-icons/bs";
import useLocalStorage from "use-local-storage";

export default function SettingsView({ activeIndex }) {
  const [theme, setTheme] = useLocalStorage("theme", "");

  const handleThemeSwitch = () => {
    if (theme === "theme") setTheme("");
    if (theme !== "theme") setTheme("theme");
  };

  return (
    <div
      className={activeIndex == 10 ? styles.container : "none"}
      data-theme="dark"
    >
      <div className={styles.itemList}>
        <div className={styles.item}>
          <div className={styles.title}>
            <h4>Theme</h4>
            <p>Select your preferred theme mode.</p>
          </div>
          <div className={styles.select}>
            <label className={styles.switch}>
              <input
                type="checkbox"
                onChange={handleThemeSwitch}
                checked={theme === "theme" ? true : false}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
