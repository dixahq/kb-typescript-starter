import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import { formatDistance } from "date-fns";
// import Avatar from "@elevio/styles/lib/components/Avatar";
import useArticle from "@elevio/kb-kit/lib/hooks/useArticle";
import AccessBanner from "./AccessBanner";

const ArticleMeta = ({ className }) => {
  const article = useArticle();
  const relativeUpdated = formatDistance(article.lastUpdatedAt, Date.now());

  return (
    <>
      <div className={cx("flex items-center", className)}>
        {/* <Avatar
          src={article.author.avatar}
          name={article.author.name}
          className="mr-4"
          isRound
          size={10}
        /> */}

        <div>
          <strong>
            <Trans i18nKey="article.writtenBy">
              Written By {{ name: article.author.name }}
            </Trans>
          </strong>
          <strong>
            <Trans i18nKey="article.lastUpdated">
              Last updated {relativeUpdated} ago
            </Trans>
          </strong>
        </div>
      </div>
      <AccessBanner />
    </>
  );
};

export default ArticleMeta;
