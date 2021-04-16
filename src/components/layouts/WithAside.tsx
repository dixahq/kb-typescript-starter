import React from "react";
import cx from "classnames";

type WithAsideProps = JSX.IntrinsicElements["section"];
function WithAside({ children, className }: WithAsideProps) {
  return <section className="with-aside">{children}</section>;
}

export default WithAside;

type AsideProps = JSX.IntrinsicElements["aside"];
export function Aside({ children, className, ...props }: AsideProps) {
  return (
    <aside className={cx("aside", className)} {...props}>
      {children}
    </aside>
  );
}

type MainProps = JSX.IntrinsicElements["div"];

function MainContentCard({ children, className, ...props }: MainProps) {
  return (
    <div className={cx("main-content-card", className)} {...props}>
      {children}
    </div>
  );
}

export function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cx("main", className)} {...props}>
      <MainContentCard>{children}</MainContentCard>
    </main>
  );
}

export function MainHeader({ children, className, ...props }: MainProps) {
  return (
    <div className={cx("main-header", className)} {...props}>
      {children}
    </div>
  );
}

export function MainBody({ children, className, ...props }: MainProps) {
  return (
    <div className={cx("main-body", className)} {...props}>
      {children}
    </div>
  );
}

export function MainFooter({ children, className, ...props }: MainProps) {
  return (
    <div className={cx("main-footer", className)} {...props}>
      {children}
    </div>
  );
}
