import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
// import Icon from "@elevio/styles/lib/components/icons";
import useArticles from "@elevio/kb-kit/lib/hooks/useArticles";
import useCategory from "@elevio/kb-kit/lib/hooks/useCategory";
import * as Category from "@elevio/kb-kit/lib/toolkit/category";
import * as Meta from "@elevio/kb-kit/lib/toolkit/meta";

const CategoryCard = ({ categoryId, className }) => {
  const category = useCategory(categoryId);
  const { totalCount } = useArticles(categoryId);

  if (!category) return null;
  const subCategoriesCount = (category.subCategories || []).length;

  return (
    <Category.Link>
      <div className={cx("text-center", className)}>
        <div className="p-6" data-testid="category-link">
          {/* <Icon icon="add" size="large" className="mx-auto mb-6" /> */}

          <h3 className="mb-2">{category.title}</h3>

          {/* <ShortDivider className="mb-4" /> */}

          <p>
            <Meta.If test={subCategoriesCount > 0}>
              <Trans
                i18nKey="categorycard.categoriesCount"
                count={subCategoriesCount}
              >
                {{ count: subCategoriesCount }} Categories
              </Trans>
              &amp;{" "}
            </Meta.If>

            <Meta.If test={!!totalCount && totalCount > 0}>
              <Trans
                i18nKey="categorycard.articlesCount"
                count={totalCount || 0}
              >
                {{ count: totalCount }} Articles
              </Trans>
            </Meta.If>
          </p>
        </div>
      </div>
    </Category.Link>
  );
};

export default CategoryCard;
