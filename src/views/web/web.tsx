import React, { useMemo } from "react";
import styles from "./web.module.scss";

export default function WebFrame() {
  return (
    <div className={styles.home}>
      <iframe
        onPlay={() => {}}
        onLoad={(e) => {
          e.preventDefault;
        }}
        src="https://www.doow.co"
        // src="https://editor.graphite.rs/"
        name="myFrame"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock"
        className={styles.frame}
        allow=""
        allowFullScreen={true}
        allowTransparency={true}
        loading="lazy"
        seamless={true}
      ></iframe>
    </div>
  );
}
export function WebFrame2() {
  return (
    <div className={styles.home}>
      <iframe
        src="https://editor.graphite.rs/"
        className={styles.frame}
        allow=""
        allowFullScreen={true}
        allowTransparency={true}
        loading="lazy"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock"
        seamless={true}
        name="myFrame"
      ></iframe>
    </div>
  );
}
