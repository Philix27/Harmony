import React, { useState } from "react";
import Head from "next/head";
import NavBar from "./navbar/navbar.comp";

export default function Layout(props) {
  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <>
      <Head>
        <title>PIMS </title>
        <meta name="PIMS" content="Created by Eligbue" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      {/* <Sidebar /> */}
      {/* <NavBar /> */}
      {props.children}
    </>
  );
}
