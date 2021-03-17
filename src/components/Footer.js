import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import LoginLogout from "./LoginLogout";

const Footer = ({ className }) => (
  <footer
    className={cx("bg-white flex-shrink-0", className)}
    data-testid="footer"
  >
    <div className="w-full lg:max-w-6xl mx-auto">
      <nav className="flex flex-col sm:flex-row items-center justify-between p-6">
        <div className="flex items-center flex-shrink-0 mr-6 mb-6 sm:mb-0">
          <span className="text-grey-lighter">
            &copy; {new Date().getFullYear()} Elevio Pty Ltd
          </span>
        </div>

        <div className="flex items-center">
          <a className="mr-6 text-grey-lighter" href="#">
            <Trans i18nKey="external-link">Our Site</Trans>
          </a>
          <LoginLogout className="mr-6 text-grey-lighter" />
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
