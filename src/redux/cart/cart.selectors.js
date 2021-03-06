const selectCart = state => state.cart;

export const selectCartItems = state => {
  const cart = selectCart(state);
  return cart.cartItems;
}

export const selectCartHidden = state => {
  const cart = selectCart(state);
  return cart.hidden;
}

export const selectCartItemsCount = state => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  );
}

export const selectCartTotal = state => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
  );
}