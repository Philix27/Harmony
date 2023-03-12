import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "./navbar/navbar.comp";
import useLocalStorage from "use-local-storage";

export default function Layout(props) {
  const [activeIndex, setactiveIndex] = useState(0);
  // const [theme, setTheme] = useLocalStorage("theme", "");
  var themeer: string;
  useEffect(() => {
    var themeer = localStorage.getItem("theme");
  });

  return (
    <div className={themeer === "theme" ? "darkTheme" : "lightTheme"}>
      <Head>
        <title>PIMS </title>
        <meta name="PIMS" content="Created by Eligbue" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      {/* <Sidebar /> */}
      {/* <NavBar /> */}
      {props.children}
    </div>
  );
}
