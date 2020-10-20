import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import { Button } from "@elevio/styles/lib/components/buttons";
import useSearchResults from "@elevio/kb-kit/lib/hooks/useSearchResults";

const SearchMore = ({ className, ...props }) => {
  const { isFetching, loadMore, hasMore } = useSearchResults();
  if (!hasMore) return null;

  return (
    <Button
      appearance="primary"
      className={cx("ShowMoreButton", className)}
      disabled={isFetching || !hasMore}
      onClick={loadMore}
      {...props}
    >
      <Trans i18nKey="search.loadmore">Load more</Trans>
      {isFetching && "..."}
    </Button>
  );
};

export default SearchMore;
