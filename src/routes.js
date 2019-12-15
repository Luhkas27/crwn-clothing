import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Header from "./components/header";
import Login from "./pages/login";
import Checkout from "./pages/checkout";


import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./store/actions/user";
import { selectCurrentUser } from "./store/selectors/user";

class Routes extends Component {
  unsubscribleFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Login />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
