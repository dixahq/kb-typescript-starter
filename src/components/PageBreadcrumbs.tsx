import React from "react";
import Breadcrumb from "./Breadcrumbs";
import { useBreadcrumbs } from "@elevio/kb-kit/lib/hooks";

type PageBreadcrumbProps = {
  className?: string;
};
function PageBreadcrumb({ className }: PageBreadcrumbProps) {
  const crumbs = useBreadcrumbs();
  return <Breadcrumb className={className} crumbs={crumbs} />;
}

export default PageBreadcrumb;
