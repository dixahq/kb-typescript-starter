import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import { formatDistance } from "date-fns";
import Avatar from "@elevio/styles/lib/components/Avatar";
import { Lead } from "@elevio/styles/lib/components/text";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import useArticle from "@elevio/kb-kit/lib/hooks/useArticle";
import AccessBanner from "./AccessBanner";

const ArticleMeta = ({ className }) => {
  const article = useArticle();
  const relativeUpdated = formatDistance(article.lastUpdatedAt, Date.now());

  return (
    <>
      <div
        className={cx(
          addClassName("article-meta"),
          "flex items-center",
          className
        )}
      >
        <Avatar
          src={article.author.avatar}
          name={article.author.name}
          className="mr-4"
          isRound
          size={10}
        />

        <div>
          <Lead>
            <Trans i18nKey="article.writtenBy">
              Written By {{ name: article.author.name }}
            </Trans>
          </Lead>
          <Lead>
            <Trans i18nKey="article.lastUpdated">
              Last updated {relativeUpdated} ago
            </Trans>
          </Lead>
        </div>
      </div>
      <AccessBanner />
    </>
  );
};

export default ArticleMeta;
