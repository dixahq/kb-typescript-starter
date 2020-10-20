import React, { useState } from "react";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import Icon from "@elevio/styles/lib/components/icons";
import { AccessLevel } from "@elevio/kb-kit/lib/types";
import useArticle from "@elevio/kb-kit/lib/hooks/useArticle";

const AccessBanner = () => {
  const article = useArticle();
  const [showing, setShowing] = useState(false);

  if (!article) throw new Error("No article in AccessBanner");

  const { isInternal, smartGroups, access } = article.accessControl;
  if (!isInternal) return null;

  const showRestrictions = smartGroups.length > 0;

  return (
    <div
      className={`flex-col text-danger border border-danger rounded p-3 mt-6`}
    >
      <div className="flex justify-between items-center">
        <div
          className="flex justify-start items-center"
          data-testid="article-access"
        >
          <Icon icon="eye-off" size={20} />
          <span className="ml-6">
            <strong>
              {access === AccessLevel.Restricted ? (
                <Trans i18nKey="internal.restricted">
                  For internal use, with restrictions
                </Trans>
              ) : (
                <Trans i18nKey="internal.unrestricted">For internal use</Trans>
              )}
            </strong>
          </span>
        </div>
        {showRestrictions && (
          <div
            className="p-1 cursor-pointer"
            onClick={() => setShowing(!showing)}
          >
            <Icon icon={showing ? "chevron-up" : "chevron-down"} size={20} />
          </div>
        )}
      </div>
      {showRestrictions && showing && (
        <ul className="pl-6 pt-3 list-disc">
          {smartGroups.map((s, i) => (
            <li key={i}>{s.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccessBanner;
