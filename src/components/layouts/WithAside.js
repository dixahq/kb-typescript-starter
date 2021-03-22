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
  <div className={cx("rounded shadow bg-white", className)} {...props}>
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
    className={cx(
      "border-b border-grey-lightest p-6 sm:p-12 relative",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const MainBody = ({ children, className, ...props }) => (
  <div
    className={cx("p-6 sm:p-12 border-b border-grey-lightest", className)}
    {...props}
  >
    {children}
  </div>
);

export const MainFooter = ({ children, className, ...props }) => (
  <div
    className={cx("p-6 sm:px-12 sm:py-6 text-center sm:text-left", className)}
    {...props}
  >
    {children}
  </div>
);
