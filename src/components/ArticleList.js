import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import useArticles from "@elevio/kb-kit/lib/hooks/useArticles";
import * as Article from "@elevio/kb-kit/lib/toolkit/article";
import * as Articles from "@elevio/kb-kit/lib/toolkit/articles";

const ArticleList = ({ className }) => {
  const { totalCount } = useArticles();
  if (totalCount === 0) return null;
  return (
    <div className={className}>
      <h3 className="mb-3">
        <Trans i18nKey="article.relatedTitle">Related Articles</Trans>
      </h3>
      <div>
        <Articles.Loop>
          <div className="mb-6">
            <Article.IsActive>
              <p className="font-semibold">
                <Article.Title />
              </p>
            </Article.IsActive>
            <Article.IsNotActive>
              <Article.Link className="link-underline-on-hover">
                <Article.Title />
              </Article.Link>
            </Article.IsNotActive>
          </div>
        </Articles.Loop>
      </div>
    </div>
  );
};

export default ArticleList;
