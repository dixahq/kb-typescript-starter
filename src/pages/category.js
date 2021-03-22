import * as React from "react";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";
import * as Category from "@elevio/kb-kit/lib/toolkit/category";
import * as Search from "@elevio/kb-kit/lib/toolkit/search";
import * as Article from "@elevio/kb-kit/lib/toolkit/article";
import * as Articles from "@elevio/kb-kit/lib/toolkit/articles";

import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WithAsideLayout, {
  Aside,
  Main,
  MainHeader,
  MainBody,
} from "../components/layouts/WithAside";

import Breadcrumb from "../components/PageBreadcrumbs";
import CategoryList from "../components/CategoryList";

const Page = () => {
  const { t } = useTranslation();
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <WithAsideLayout>
        <Main>
          <MainHeader>
            <Breadcrumb className="mb-6" />
            <h1 className="mb-4" data-testid="category-title">
              <Category.Title />
            </h1>
          </MainHeader>

          <MainBody data-testid="category-body">
            <Articles.Loop>
              <div className="mb-6 block">
                <Article.Link className="mb-2" data-testid="article-link">
                  <Article.Title />
                </Article.Link>
                <Article.Summary className="text-grey-light text-sm" />
              </div>
            </Articles.Loop>
          </MainBody>
        </Main>

        <Aside>
          <Search.Input
            placeholder={t("search.shortplaceholder")}
            className="mb-12 hidden md:block"
            data-testid="category-search-input"
          />
          <CategoryList />
        </Aside>
      </WithAsideLayout>
    </PageLayout>
  );
};

export default Page;
