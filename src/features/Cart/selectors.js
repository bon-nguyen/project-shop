import {createSelector} from '@reduxjs/toolkit';

export const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of product in card
  
export const cartItemsCountSelector = createSelector(
    cartItemsSelector, cartItems => cartItems.reduce((count, item) => count + item.quantity , 0)
);

// calculate total of cart

export  const cartTotalSelector = createSelector(
    cartItemsSelector, (cartItems) => cartItems.reduce((total, item) => total + ( item.product.salePrice * item.quantity) , 0)
);

