import React from "react";
import Router, { withRouter, useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = ({ data }) => {
  console.log(data);
  const router = useRouter();

  return (
    <nav className="container">
      <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
        <li className="px-2">
          <Link href="/">
            <a className="text-gray-600 no-underline text-indigo">Home</a>
          </Link>
        </li>
        <li>/</li>

        {data.map(({ path, label }, i) => {
          return (
            <React.Fragment key={i}>
              <li className="px-2">
                <Link href={path}>
                  <a className="text-gray-600 no-underline text-indigo">
                    {label}
                  </a>
                </Link>
              </li>

              {data.length - 1 !== i && <li>/</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
