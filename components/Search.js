import React from "react";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

const breadcrumbsData = [
  {
    label: "Search",
    path: "/jobsearch",
  },
];
const Search = () => {
  return (
    <div>
      <Breadcrumbs data={breadcrumbsData} />

      <h1 className="text-2xl font-bold text-center m-4">Job Search page</h1>
      <p className="text-center">
        {" "}
        Click on any job below to directly go to description page{" "}
      </p>
      {["One", "Two", "Three", "Four"].map((item, i) => {
        return (
          <div className="text-center" key={i}>
            <Link
              href={{
                pathname: "/jobdescription",
                query: {
                  jobId: item,
                },
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

export default Search;
