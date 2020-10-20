import * as React from "react";
import * as Search from "@elevio/kb-kit/lib/toolkit/search";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";

import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage";

const Page = () => {
  const { t } = useTranslation();
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <ErrorPage title="Whoops!">
        <p className="text-xl mb-12">
          <Trans i18nKey="error.404">
            The page you are looking for cannot be found.
          </Trans>
        </p>

        <Search.Search
          placeholder={t("search.placeholder")}
          className="mb-12"
        />

        <p className="text-grey-light">
          <Trans i18nKey="support.question">
            Need more help?{" "}
            <a href="#" className="underline">
              Submit a support request
            </a>
          </Trans>
        </p>
      </ErrorPage>
    </PageLayout>
  );
};

export default Page;
