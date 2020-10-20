import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import Icon from "@elevio/styles/lib/components/icons";
import { SubHeading } from "@elevio/styles/lib/components/text";
import { addClassName } from "@elevio/styles/lib/utils/classes";
import useSubCategories from "@elevio/kb-kit/lib/hooks/useSubCategories";
import * as Category from "@elevio/kb-kit/lib/toolkit/category";

const CategoryList = ({ className }) => {
  const subCategories = useSubCategories();
  if (!subCategories || subCategories.length === 0) return null;

  return (
    <div className={cx(addClassName("category-list"), className)}>
      <SubHeading className="mb-3">
        <Trans i18nKey="category.listTitle">Categories</Trans>
      </SubHeading>
      <div>
        <Category.LoopSubCategories>
          <div className="mb-6">
            <Category.Link className="inline-flex items-center link-underline-on-hover">
              <span className="mr-2">
                <Category.Title />
              </span>
              <Icon icon="chevron-right" size={12} />
            </Category.Link>
          </div>
        </Category.LoopSubCategories>
      </div>
    </div>
  );
};

export default CategoryList;
