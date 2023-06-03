import React, { useLayoutEffect } from "react";
import styles from "./canvas.module.scss";

export default function CanvasFrame() {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);

    // return () => {

    // };
  }, []);
  return (
    <div className={styles.home}>
      <canvas
        className={styles.frame}
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ background: "#566f" }}
      ></canvas>
    </div>
  );
}
