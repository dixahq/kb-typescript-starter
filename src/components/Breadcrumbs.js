import React from "react";
import cx from "classnames";

import { IBreadCrumb } from "@elevio/kb-kit/lib/types";
import * as Meta from "@elevio/kb-kit/lib/toolkit/meta";
import * as Category from "@elevio/kb-kit/lib/toolkit/category";
import * as Article from "@elevio/kb-kit/lib/toolkit/article";

const Breadcrumb = ({ className, crumbs, noLinks }) => (
  <div
    className={cx(
      "flex items-center text-grey-lighter leading-none",
      className
    )}
  >
    {crumbs.map((crumb, index) => (
      <React.Fragment key={index}>
        <Crumb
          crumb={crumb}
          className="uppercase font-medium text-xs tracking-widest"
          noLinks={noLinks}
        />
        {index < crumbs.length - 1 && (
          <span className="mx-3">
            {/* <Icon size={11} icon="chevron-right" /> */}
          </span>
        )}
      </React.Fragment>
    ))}
  </div>
);

const Crumb = ({ noLinks, crumb, className }) => {
  if (noLinks) {
    return <span className={className}>{crumb.title}</span>;
  }
  if (crumb.linkType === "article") {
    return <Article.Link articleId={crumb.linkId}>{crumb.title}</Article.Link>;
  }
  if (crumb.linkType === "category") {
    return (
      <Category.Link categoryId={crumb.linkId}>{crumb.title}</Category.Link>
    );
  }
  return <Meta.HomeLink>{crumb.title}</Meta.HomeLink>;
};

export default Breadcrumb;
