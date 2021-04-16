import React from "react";
import cx from "classnames";

type MainProps = {
  className?: string;
  children: React.ReactNode;
}
export function MainSection ({ children, className, ...props }: MainProps) {
  return <section className={cx('main-section', className)} {...props}>{children}</section>
}

export function MainCentered({ children, className, ...props }: MainProps) {
  return <section className={cx('main-centered', className)} {...props}>{children}</section>
}

export const GridContainer = ({ children, className, ...props }:MainProps) => (
  <div className={cx("grid", className)} {...props}>
    {children}
  </div>
);

export const GridItem = ({ children, className, ...props }: MainProps) => (
  <div
    className={cx("grid-item", className)}
    {...props}
  >
    {children}
  </div>
);
