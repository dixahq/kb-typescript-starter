import React from "react";
import cx from "classnames";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import * as Auth from "@elevio/kb-kit/lib/toolkit/auth";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";

const LoginLogout = ({ className }) => {
  const { t } = useTranslation();
  const loginText = t("login", "Log in");
  const logoutText = t("logout", "Log out");
  return (
    <Auth.LoginLogoutLink
      className={cx(addClassName("auth-button"), className, "cursor-pointer")}
      loginChildren={loginText}
      logoutChildren={logoutText}
    />
  );
};

export default LoginLogout;