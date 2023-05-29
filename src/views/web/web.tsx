import React from "react";
import styles from "./web.module.scss";

export default function WebFrame() {
  return (
    <div className={styles.home}>
      <iframe
        onLoad={(e) => {
          e.preventDefault;
        }}
        // src="https://www.doow.co"
        src="https://doc.rust-lang.org/stable/book/ch07-01-packages-and-crates.html"
        name="myFrame"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock	 
        
        "
        className={styles.frame}
      ></iframe>
    </div>
  );
}
