import React from "react";
import Link from "next/link";

const Jobsearch = () => {
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
            <a className="no-underline text-indigo">Search Page</a>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-bold text-center m-4">Job Search page</h1>
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
  );
};

export default Jobsearch;
