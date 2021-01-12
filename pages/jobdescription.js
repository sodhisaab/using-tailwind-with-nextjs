import React from "react";
import Router, { withRouter, useRouter } from "next/router";
import Link from "next/link";

const Jobdescription = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="container">
        <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
          <li className="px-2">
            <Link
              href={{
                pathname: "/"
              }}
            >
              <a className="text-gray-600 no-underline text-indigo">Home</a>
            </Link>
          </li>
          <li>/</li>
          <li className="px-2">
            <Link
              href={{
                pathname: "/jobsearch"
              }}
            >
              <a className="text-gray-600 no-underline text-indigo">
                Search Page
              </a>
            </Link>
          </li>
          <li>/</li>
          <li className="px-2"> Job - {router.query.jobId} </li>
        </ol>
      </nav>
      <p className="">
        If navigated to this page directly from home page then the middle
        breadcrumb (Search Page) Should not be displayed and the breadcrumb
        needs to be like <span className="font-bold"> Home / Job - JobId </span>
        <br />
        <br />
        Else the breadcrumb is valid if navigated from search page.
      </p>
      <h1 className="text-2xl font-bold text-center m-4">
        Job - {router.query.jobId}
      </h1>
    </div>
  );
};

export default Jobdescription;
