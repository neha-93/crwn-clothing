import {connect} from "react-redux";
import {selectCollectionForPreview} from "../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";

import CollectionPreview from "./CollectionPreview";

import "./CollectionsOverview.scss";


const CollectionsOverview = ({collections}) => {

    return (
        <div className="display-collections">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
}



const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);