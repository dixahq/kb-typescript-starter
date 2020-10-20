import * as React from "react";
import { HeaderTitle } from "@elevio/styles/lib/components/text";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";

import * as Search from "@elevio/kb-kit/lib/toolkit/search";
import * as Categories from "@elevio/kb-kit/lib/toolkit/categories";
import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MainSection,
  GridContainer,
  GridItem,
} from "../components/layouts/Main";
import CategoryCard from "../components/CategoryCard";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <PageLayout
      header={
        <Header hideSearch>
          <HeaderTitle className="text-center">
            <Trans i18nKey="home.welcome">
              Welcome to the elevio help center. Here you will find
              documentation on how to use our product.
            </Trans>
          </HeaderTitle>
          <Search.Search
            placeholder={t("search.placeholder")}
            data-testid="search-input"
          />
        </Header>
      }
      footer={<Footer />}
    >
      <MainSection>
        <GridContainer>
          <Categories.Loop>
            <GridItem>
              <CategoryCard data-testid="category-card" />
            </GridItem>
          </Categories.Loop>
        </GridContainer>
      </MainSection>
    </PageLayout>
  );
};

export default HomePage;
