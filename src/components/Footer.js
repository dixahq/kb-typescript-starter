import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import LoginLogout from "./LoginLogout";

const Footer = ({ className }) => (
  <footer
    className={cx("section", className)}
    data-testid="footer"
  >
    <div className="section-wrapper">
      <div className="display:flex justify-content:space-between">
        <p>&copy; {new Date().getFullYear()} Elevio Pty Ltd</p>
        <nav>
          <a href="#">
            <Trans i18nKey="external-link">Our Site</Trans>
          </a>
          <LoginLogout />
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
