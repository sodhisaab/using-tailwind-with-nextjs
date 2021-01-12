import React from "react";
import Head from "next/head";
import Home from "../components/Home";

const HomeRoot = () => (
  <div className="text-sans">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </div>
);

export default HomeRoot;
