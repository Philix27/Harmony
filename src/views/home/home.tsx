import React from "react";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
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
