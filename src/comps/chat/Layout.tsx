import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "./navbar/navbar.comp";
import useLocalStorage from "use-local-storage";

export default function Layout(props) {
  var themeer: string;
  useEffect(() => {
    var themeer = localStorage.getItem("theme");
  });

  return (
    <div className={themeer === "theme" ? "darkTheme" : "lightTheme"}>
      <Head>
        <title>Kolab </title>
        <meta name="Kolab" content="Created by Eligbue" />
      </Head>

      {props.children}
    </div>
  );
}
