import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  (collection) => Object.keys(collection).map((key) => collection[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[collectionUrlParam]
  )
);
