import React from "react";
import cx from "classnames";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";
import { addClassName } from "@elevio/styles/lib/utils/classes";

const ErrorPage = ({ children, title, className }) => {
  const { t } = useTranslation();
  const defaultTitle = t("error.defaultTitle");
  return (
    <section
      className={cx(addClassName("error-page"), "px-6 text-center", className)}
    >
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-5xl font-medium mb-2">{title || defaultTitle}</h1>
        {children}
      </div>
    </section>
  );
};

export default ErrorPage;
