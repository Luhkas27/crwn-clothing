import React from "react";

import CustomButton from "../../button";

import "./styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
