import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";

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
      {props.children}
    </>
  );
}
