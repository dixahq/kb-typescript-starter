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
    <header className={cx("bg-primary p-6", className)} data-testid="header">
      <div className="w-full lg:max-w-6xl mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo className="mr-6" />
            <span className="hidden md:block">
              <Trans i18nKey="header.title">Help Centre</Trans>
            </span>
          </div>

          <div className="flex items-center hidden md:flex">
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

          <div className="flex items-center flex md:hidden">
            {!hideSearch && (
              <button
                className="mr-6"
                onClick={() => setDisplaySearchBar(!displaySearchBar)}
              >
                {/* <Icon icon="search" className="text-white" /> */}
              </button>
            )}
            <button onClick={() => setDisplayMobileMenu(!displayMobileMenu)}>
              {/* <Icon icon="menu" className="text-white" /> */}
            </button>
          </div>
        </nav>
      </div>

      {children && (
        <div className="py-12 pb-6 max-w-3xl mx-auto">{children}</div>
      )}

      {displayMobileMenu && (
        <div className="py-12 pb-6 max-w-3xl mx-auto">
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
    </header>
  );
};

export default Header;
