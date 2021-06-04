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

export default AddItemToCart;
