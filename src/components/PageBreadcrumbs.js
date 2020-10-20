import React from "react";
import Breadcrumb from "./Breadcrumbs";
import useBreadcrumbs from "@elevio/kb-kit/lib/hooks/useBreadcrumbs";

const PageBreadcrumb = ({ className }) => {
  const crumbs = useBreadcrumbs();
  return <Breadcrumb className={className} crumbs={crumbs} />;
};

export default PageBreadcrumb;
