import React from "react";
import styles from "./home.module.scss";

export default function Home({ activeIndex }) {
  return (
    <div className={activeIndex == 1 ? styles.home : "none"}>
      <div className="buttons">
        <input
          type="submit"
          value="Login with Google"
          // onClick={handleSubmit}
          className="btn"
        />
      </div>
    </div>
  );
}
