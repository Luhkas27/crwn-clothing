import React, { Component } from "react";

import SignIn from "../../components/sign";
import SignUp from "../../components/logout";

import "./styles.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
