import React, { useState } from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
// import Icon from "@elevio/styles/lib/components/icons";
import * as Search from "@elevio/kb-kit/lib/toolkit/search";
import useLanguages from "@elevio/kb-kit/lib/hooks/useLanguages";

// import LanguagePicker from "@elevio/styles/lib/components/languagePicker";
import { Logo } from "./Logo";
import LoginLogout from "./LoginLogout";

const Header = ({ children, className, hideSearch }) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const { supportedLanguages, language, setCurrentLanguage } = useLanguages();

  return (
    <header className={cx("header", className)} data-testid="header">
      <div className="header-wrapper">
        <nav className="display:flex justify-content:space-between" aria-label="navigation">
          <div className="display:flex align-items:center">
            <Logo />
            <div class="nav-title">
              <Trans i18nKey="header.title">Help Centre</Trans>
            </div>
          </div>

          <div className="nav-desktop-menu">
            <a className="text-white mr-6" href="#">
              <Trans i18nKey="external-link">Our Site</Trans>
            </a>
            <LoginLogout className="text-white mr-6" />

            {supportedLanguages.length > 1 && (
              <div className="w-56">
                {/* <LanguagePicker
                  supportedLanguages={supportedLanguages}
                  value={language}
                  onChange={setCurrentLanguage}
                /> */}
              </div>
            )}
          </div>

          <div className="nav-mobile-menu-trigger">
            {!hideSearch && (
              <button
                className="mr-6"
                onClick={() => setDisplaySearchBar(!displaySearchBar)}
              >
                Search
              </button>
            )}
            <button onClick={() => setDisplayMobileMenu(!displayMobileMenu)}>
              Menu
            </button>
          </div>
        </nav>

        {displayMobileMenu && (
          <div className="nav-mobile-menu">
            <div className="flex flex-col items-center text-center">
              <a className="text-white mb-3" href="#">
                <Trans i18nKey="external-link">Our Site</Trans>
              </a>
              <LoginLogout className="text-white mb-3" />
              {/* {supportedLanguages.length > 1 && (
                <LanguagePicker
                  supportedLanguages={supportedLanguages}
                  value={language}
                  onChange={setCurrentLanguage}
                />
              )} */}
            </div>
          </div>
        )}

        {displaySearchBar && !hideSearch && (
          <div className="py-6 pb-3 max-w-3xl mx-auto">
            <Search.Input />
          </div>
        )}

        {children && (
          <div className="hero-wrapper">{children}</div>
        )}
      </div>
    </header>
  );
};

export default Header;
