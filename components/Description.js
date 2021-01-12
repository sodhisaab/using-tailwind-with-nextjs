import React from "react";
import Router, { withRouter, useRouter } from "next/router";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

const Description = () => {
  const router = useRouter();

  const breadcrumbsData = [
    {
      label: "Search",
      path: "/jobsearch",
    },
    {
      label: `${router.query.jobId}`,
      path: `?jobId=${router.query.jobId}`,
    },
  ];

  return (
    <div>
      <Breadcrumbs data={breadcrumbsData} />

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

export default Description;
