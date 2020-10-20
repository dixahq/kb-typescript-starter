import * as React from 'react';
import { BodyInverse, MediumHeading } from '@elevio/styles/lib/components/text';
import { Card } from '@elevio/styles/lib/components/cards';
import * as Search from '@elevio/kb-kit/lib/toolkit/search';
import * as SearchResults from '@elevio/kb-kit/lib/toolkit/searchResults';
import { HomeLink } from '@elevio/kb-kit/lib/toolkit/meta';
import useSearchResults from '@elevio/kb-kit/lib/hooks/useSearchResults';
import { Trans } from '@elevio/kb-kit/lib/toolkit/trans';
import useTranslation from '@elevio/kb-kit/lib/hooks/useTranslation';

import PageLayout from '../components/layouts/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MainCentered } from '../components/layouts/Main';
import SearchResult from '../components/SearchResult';
import SearchMore from '../components/SearchMore';

const Page = () => {
  const { t } = useTranslation();
  const { searchTerm, totalCount } = useSearchResults();
  return (
    <PageLayout
      header={
        <Header hideSearch>
          <SearchResults.IsNotEmpty>
            <BodyInverse className="mb-4">
              <Trans i18nKey="search.count" count={totalCount || 0}>
                We found {{ count: totalCount }} articles for{' '}
                <strong>"{{ searchTerm }}"</strong>
              </Trans>
            </BodyInverse>
          </SearchResults.IsNotEmpty>

          <Search.Search
            placeholder={t('search.placeholder', 'Search our help centre...')}
          />
        </Header>
      }
      footer={<Footer />}
    >
      <MainCentered>
        <SearchResults.LoopResults>
          <SearchResult className="mb-6 block" />
        </SearchResults.LoopResults>

        <SearchResults.IsEmpty>
          <Card className="py-16 text-center">
            <MediumHeading className="mb-4">
              <Trans i18nKey="search.noResults">
                Sorry we couldn’t find anything for “
                <SearchResults.SearchTerm />”
              </Trans>
            </MediumHeading>
            <p>
              <Trans i18nKey="search.tryAgain">
                Try another search or <HomeLink>Browse by category</HomeLink>
              </Trans>
            </p>
          </Card>
        </SearchResults.IsEmpty>
        <SearchMore className="block mx-auto" />
      </MainCentered>
    </PageLayout>
  );
};

export default Page;
