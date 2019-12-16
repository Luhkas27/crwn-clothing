import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collection/overview/index.js";
import Collection from "../collection/index.js";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exatc path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
