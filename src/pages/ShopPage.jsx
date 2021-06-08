import { Route } from "react-router-dom";

import ShopOverview from "../components/CollectionsOverview";
import CollectionPage from "./Collection";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ShopOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;
