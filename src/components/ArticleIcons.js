import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import Icon from "@elevio/styles/lib/components/icons";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import useCopy from "@elevio/kb-kit/lib/hooks/useCopy";

const ArticleIcons = () => {
  const { onCopy, didCopy } = useCopy();
  return (
    <div
      className={cx(
        addClassName("article-icons"),
        "absolute top-0 right-0 flex items-center mr-6 mt-6"
      )}
    >
      {didCopy ? (
        <div className="text-xs text-grey-light">
          <Trans i18nKey="copied">Copied</Trans>
        </div>
      ) : null}
      <button className="ml-3 focus:outline-none" onClick={(e) => onCopy(e)}>
        <Icon
          icon="clipboard"
          className="text-grey-lighter hover:text-grey-light"
        />
      </button>
      <button onClick={window.print} className="ml-3 focus:outline-none">
        <Icon
          icon="print"
          className="text-grey-lighter hover:text-grey-light"
        />
      </button>
      {/* <button className="ml-3 focus:outline-none">
        <Icon
          icon="social-media"
          className="text-grey-lighter hover:text-grey-light"
        />
      </button> */}
    </div>
  );
};

export default ArticleIcons;
