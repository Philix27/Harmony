import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

export default function NavBar() {
  const show = "show";
  const [showNav, setShowNav] = useState(false);
  // console.log("Path -", _path);
  return (
    <>
      <div className={styles.navbar}>
        <label className={styles.brand}>
          <Link href="/" className={styles.brand}>
            KOLAB
          </Link>
        </label>

        <form>
          <div className={styles.input_box}>
            <input
              type="text"
              id="form-email"
              placeholder="Search..."
              name="text"
            />
          </div>
        </form>

        <div></div>

        <label className={styles.icon}>
          {showNav ? (
            <FaTimes onClick={() => setShowNav(!showNav)} />
          ) : (
            <FaBars onClick={() => setShowNav(!showNav)} />
          )}
        </label>
      </div>
    </>
  );
}
