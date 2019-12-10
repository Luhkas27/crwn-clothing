import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Header from "./components/header";
import Login from "./pages/login";
import { auth } from "./firebase/utils";

class Routes extends Component {
  state = {
    currentUser: null
  };

  unsubscribleFromAuth = null;

  componentDidMount() {
    this.unsubscribleFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Login} />
        </Switch>
      </>
    );
  }
}

export default Routes;
