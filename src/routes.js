import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Shop from "./pages/shop";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
  </Switch>
);

export default Routes;
