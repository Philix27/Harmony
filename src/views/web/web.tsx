import React from "react";
import styles from "./web.module.scss";
import Iframe from "react-iframe";

export default function WebFrame() {
  return (
    <div className={styles.home}>
      <iframe
        onLoad={(e) => {
          e.preventDefault;
        }}
        // src="https://www.doow.co"
        src="https://doc.rust-lang.org/stable/book/ch07-01-packages-and-crates.html"
        // src="https://editor.graphite.rs/"
        name="myFrame"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock"
        className={styles.frame}
      ></iframe>
    </div>
  );
}
export function WebFrame2() {
  return (
    <div className={styles.home}>
      <Iframe
        // sandbox="allow-downloads-without-user-activation"
        // sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
        url="http://localhost:3002/dashboard"
        // url="https://doc.rust-lang.org/stable/book/ch07-01-packages-and-crates.html"
        // position="absolute"
        width="100%"
        height="200px"
        id="myId"
        // className="myClassname"
        styles={{ height: "25px" }}
      />
    </div>
  );
}

{
  //  <div className={styles.home}></div>
  /* <iframe
        // allow="js"
        // sandbox="allow-scripts allow-popups allow-same-origin"
        onLoad={(e) => {
          e.preventDefault;
        }}
        // src="https://www.doow.co"
        src="http://localhost:3002/dashboard"
        // src="https://editor.graphite.rs/"

        name="myFrame"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock allow-scripts allow-popups allow-same-origin"
        className={styles.frame}
      ></iframe> */
}
