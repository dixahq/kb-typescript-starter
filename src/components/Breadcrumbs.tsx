import React from "react";
import cx from "classnames";

import * as Meta from "@elevio/kb-kit/lib/components/meta";
import * as Category from "@elevio/kb-kit/lib/components/category";
import * as Article from "@elevio/kb-kit/lib/components/article";
import { IBreadCrumb } from "@elevio/kb-kit/lib/types";

type BreadcrumbProps = {
  className?: string;
  crumbs: IBreadCrumb[];
  noLinks?: boolean;
};
function Breadcrumb({ className, crumbs, noLinks }: BreadcrumbProps) {
  return (
    <div className={cx("breadcrumbs", className)}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <Crumb crumb={crumb} className="breadcrumbs-link" noLinks={noLinks} />
          {index < crumbs.length - 1 && (
            <span className="breadcrumbs-divider">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

type Crumb = {
  linkId: string;
  linkType: string;
  title: string;
};
type CrumbProps = {
  className?: string;
  crumb: IBreadCrumb;
  noLinks?: boolean;
};
function Crumb({ noLinks, crumb, className }: CrumbProps) {
  if (noLinks) {
    return <span className={className}>{crumb.title}</span>;
  }
  if (crumb.linkType === "article") {
    return (
      <Article.Link articleId={crumb.linkId} className={className}>
        {crumb.title}
      </Article.Link>
    );
  }
  if (crumb.linkType === "category") {
    return (
      <Category.Link categoryId={crumb.linkId} className={className}>
        {crumb.title}
      </Category.Link>
    );
  }
  return <Meta.HomeLink className={className}>{crumb.title}</Meta.HomeLink>;
}

export default Breadcrumb;
