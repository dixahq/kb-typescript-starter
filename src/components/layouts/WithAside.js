import React from "react";
import cx from "classnames";

const WithAside = ({ children, className }) => (
  <section className="sm:p-6">
    <div className="w-full lg:max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row">{children}</div>
    </div>
  </section>
);

export default WithAside;

export const Aside = ({ children, className, ...props }) => (
  <aside
    className={cx(
      "w-full md:w-1/3 mr-0 md:mr-12 p-6 md:p-0 md:pt-12 sm:block",
      className
    )}
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
  <main className={cx("flex-1", className)} {...props}>
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
