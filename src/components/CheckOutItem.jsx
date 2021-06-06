import "./CheckOutItem.scss";
import { deleteItemFromCart, addItem, decreaseItem } from "../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckOutItem = ({ cartItem, clearItem, increaseItem, decreaseItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(deleteItemFromCart(item)),
  increaseItem: item => dispatch(addItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
