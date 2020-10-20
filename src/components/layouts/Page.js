import React from "react";
import cx from "classnames";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import Alert from "../Alert";

const PageLayout = ({ children, className, header, footer }) => (
  <div
    className={cx(
      addClassName("page-layout"),
      "items-stretch flex flex-col h-full antialiased",
      className
    )}
  >
    <div className="flex flex-srink-0 flex-grow bg-background flex-col">
      {header}
      <Alert />
      <div>{children}</div>
    </div>
    {footer}
  </div>
);

export default PageLayout;
