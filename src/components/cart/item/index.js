import React from "react";

import "./styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantify } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantify} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
