import React from "react";
import cx from "classnames";

export const MainSection = ({ children, className, ...props }) => (
  <section className={cx('main-section', className)} {...props}>{children}</section>
);

export const MainCentered = ({ children, className, ...props }) => (
  <section className={cx('main-centered', className)} {...props}>{children}</section>
);

export const GridContainer = ({ children, className, ...props }) => (
  <div className={cx("grid", className)} {...props}>
    {children}
  </div>
);

export const GridItem = ({ children, className, ...props }) => (
  <div
    className={cx("grid-item", className)}
    {...props}
  >
    {children}
  </div>
);
