import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount)
  const dispatch = useDispatch()
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {itemCount} </span>
    </div>
  );
}

export default CartIcon;