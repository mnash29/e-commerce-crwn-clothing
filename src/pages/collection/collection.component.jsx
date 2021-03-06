import React from 'react';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.components';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 clas='title'>{ title.toUpperCase() }</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default CollectionPage;