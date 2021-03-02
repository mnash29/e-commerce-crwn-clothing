import React from 'react';
import { useSelector } from 'react-redux';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
  const collections = useSelector(selectShopCollections);
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}

export default ShopPage;