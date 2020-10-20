import React from "react";
import cx from "classnames";
import { ClickableCard } from "@elevio/styles/lib/components/cards";
import Breadcrumb from "./SearchBreadcrumbs";
import { MediumHeading } from "@elevio/styles/lib/components/text";
import { Image } from "@elevio/styles/lib/components/image";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import * as SearchResults from "@elevio/kb-kit/lib/toolkit/searchResults";

const SearchResult = ({ className, image }) => {
  return (
    <SearchResults.ArticleLink>
      <ClickableCard className={cx(addClassName("search-result"), className)}>
        {image && <Image src={image} className="h-48" />}
        <div className="p-6" data-testid="article-link">
          <Breadcrumb className="mb-4" />
          <MediumHeading className="mb-2">
            <SearchResults.ArticleTitle />
          </MediumHeading>
          <SearchResults.Snippet />
        </div>
      </ClickableCard>
    </SearchResults.ArticleLink>
  );
};

export default SearchResult;
