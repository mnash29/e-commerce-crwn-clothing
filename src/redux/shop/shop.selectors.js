const selectShop = state => state.shop;

export const selectShopCollections = state => {
  const shop = selectShop(state);
  return shop.collections;
}

export const selectCollection = collectionUrlParam => state => {
  const collections = selectShopCollections(state);
  return collections[collectionUrlParam];
}

export const selectShopCollectionForPreview = state => {
  const collections = selectShopCollections(state);
  return Object.keys(collections).map(key => collections[key]);
}