const selectShop = state => state.shop;

export const selectShopCollections = state => {
  const shop = selectShop(state);
  return shop.collections;
}

export const selectCollection = collectionUrlParam => state => {
  const collections = selectShopCollections(state);
  return collections ? 
    collections[collectionUrlParam] : null;
}

export const selectShopCollectionForPreview = state => {
  const collections = selectShopCollections(state);
  return collections ?
    Object.keys(collections).map(key => collections[key]) : [];
}