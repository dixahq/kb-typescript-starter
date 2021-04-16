import React from "react";
import { Trans } from "@elevio/kb-kit/lib/components/trans";

function Loader() {
  return (
    <div className="page-loader">
      <Trans i18nKey="loading">Loading</Trans>
    </div>
  );
}

export default Loader;
