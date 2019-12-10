import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";

const TopicsList = props => {
  console.log(props);

  return (
    <div>
      <Link to="/">Topics</Link>
      <h1>TOPIC LIST</h1>
    </div>
  );
};

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/topic" component={TopicsList} />
  </Switch>
);

export default Routes;
