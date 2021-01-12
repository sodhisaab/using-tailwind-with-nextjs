import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-full text-gray-900">
      <h1 className="text-2xl font-bold text-center m-4">
        How to make breadcrumb?
      </h1>
      <div className="text-center">
        Click here to go to &nbsp;
        <Link
          href={{
            pathname: "/jobsearch"
          }}
        >
          <a className="text-indigo-500">Search Page</a>
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-center">Or</h1>
      <p className="text-center">
        {" "}
        Click on any job below to directly go to description page{" "}
      </p>
      {["One", "Two", "Three", "Four"].map((item) => {
        return (
          <div className="text-center">
            <Link
              href={{
                pathname: "/jobdescription",
                query: {
                  jobId: item
                }
              }}
            >
              <a className="text-indigo-500 text-center">
                {" "}
                Job - {item}
                <br />
                <br />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default Home;
