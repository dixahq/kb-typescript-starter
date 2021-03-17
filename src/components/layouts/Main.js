import React from "react";
import cx from "classnames";

export const MainSection = ({ children, className, ...props }) => (
  <section className={cx("p-6 py-12", className)} {...props}>
    <div className="w-full md:max-w-6xl mx-auto">{children}</div>
  </section>
);

export const MainCentered = ({ children, className, ...props }) => (
  <section className={cx("p-6 py-12", className)} {...props}>
    <div className="max-w-3xl mx-auto">{children}</div>
  </section>
);

export const GridContainer = ({ children, className, ...props }) => (
  <div className={cx("flex flex-wrap -mx-3", className)} {...props}>
    {children}
  </div>
);

export const GridItem = ({ children, className, ...props }) => (
  <div
    className={cx("w-full sm:w-1/2 md:w-1/3 px-3 mb-6", className)}
    {...props}
  >
    {children}
  </div>
);
