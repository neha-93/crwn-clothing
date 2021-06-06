const AddItemToCart = (cartItems, itemToBeAdded) => {
  const itemFound = cartItems.find(
    (cartItem) => cartItem.id === itemToBeAdded.id
  );
  if (itemFound) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToBeAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else return [...cartItems, { ...itemToBeAdded, quantity: 1 }];
};

export const decreaseItemFromCart = (cartItems, item) => {
  const deleteItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );
  console.log(deleteItem);

  if (deleteItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export default AddItemToCart;
