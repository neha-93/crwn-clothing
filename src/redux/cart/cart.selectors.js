import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCountCartItems = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuatity, cartItem) => totalQuatity + cartItem.quantity,
      0
    )
);

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
    0
  )
);
