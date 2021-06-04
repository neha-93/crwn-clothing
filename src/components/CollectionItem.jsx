import { addItem } from "../redux/cart/cart.action";
import "./CollectionItem.scss";
import CustomButton from "./CustomButton";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
