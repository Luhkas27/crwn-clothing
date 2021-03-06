import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'

import CustomButton from "../../button";
import CartItem from "../item";
import { selectCartItems } from "../../../store/selectors/cart";
import { toggleCartHidden } from "../../../store/actions/cart";

import "./styles.scss";

const CartDropdown = ({ cartItems, history , dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? 
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      )) : <span className="empty-message">Your cart is empty</span>}
    </div>
    <CustomButton onClick={() => { 
      history.push('/checkout')
      dispatch(toggleCartHidden())}}>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
