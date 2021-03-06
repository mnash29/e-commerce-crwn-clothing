import React from 'react';
import { useSelector } from 'react-redux';

import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollectionForPreview);
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}

export default CollectionsOverview;