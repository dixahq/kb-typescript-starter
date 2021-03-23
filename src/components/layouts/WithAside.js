import React from "react";
import cx from "classnames";

const WithAside = ({ children, className }) => (
  <section className="with-aside">{children}</section>
);

export default WithAside;

export const Aside = ({ children, className, ...props }) => (
  <aside
    className={cx("aside",className)}
    {...props}
  >
    {children}
  </aside>
);

const MainContentCard = ({ children, className, ...props }) => (
  <div className={cx("main-content-card", className)} {...props}>
    {children}
  </div>
);

export const Main = ({ children, className, ...props }) => (
  <main className={cx("main", className)} {...props}>
    <MainContentCard>{children}</MainContentCard>
  </main>
);

export const MainHeader = ({ children, className, ...props }) => (
  <div
    className={cx("main-header", className)}
    {...props}
  >
    {children}
  </div>
);

export const MainBody = ({ children, className, ...props }) => (
  <div
    className={cx("main-body", className)}
    {...props}
  >
    {children}
  </div>
);

export const MainFooter = ({ children, className, ...props }) => (
  <div
    className={cx("main-footer", className)}
    {...props}
  >
    {children}
  </div>
);
