import "./CheckOut.scss";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { selectTotal } from "../redux/cart/cart.selectors";
import CheckOutItem from "../components/CheckOutItem";
import { connect } from "react-redux";
import StripeCheckoutButton from "../components/StripeButton";

const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">Total: ${total}</div>
    <div class="test-card">
      ***Use following credit card for making test payments***
      <br />
      4242 4242 4242 4242 --- Exp date: 1/24 --- CVV: 123
    </div>
      <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps)(CheckOut);
