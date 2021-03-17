import React from "react";
import cx from "classnames";
import Breadcrumb from "./SearchBreadcrumbs";
import * as SearchResults from "@elevio/kb-kit/lib/toolkit/searchResults";

const SearchResult = ({ className, image }) => {
  return (
    <SearchResults.ArticleLink>
      <div className={className}>
        {image && <img src={image} className="h-48" />}
        <div className="p-6" data-testid="article-link">
          <Breadcrumb className="mb-4" />
          <h3 className="mb-2">
            <SearchResults.ArticleTitle />
          </h3>
          <SearchResults.Snippet />
        </div>
      </div>
    </SearchResults.ArticleLink>
  );
};

export default SearchResult;
