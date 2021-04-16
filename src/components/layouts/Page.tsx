import React from "react";
import cx from "classnames";
import Alert from "../Alert";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  header: React.ReactNode;
  footer: React.ReactNode;
};
function PageLayout({ children, className, header, footer }: PageLayoutProps) {
  return (
    <main className={cx("page", className)}>
      {header}
      <Alert />
      <div className="body">
        <div className="body-wrapper">{children}</div>
      </div>
      {footer}
    </main>
  );
}

export default PageLayout;
