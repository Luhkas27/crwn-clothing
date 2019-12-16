import React from "react";
import StripeCheckout from "react-stripe-checkout";

// import { Container } from './styles';

const SrtipeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_KqFmYhrPB34A1IBRrZMqlXp800OyJLQVt6";

  const getToken = token => {
    console.log(token);
    alert("Payment Success!!!");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRW Clothing Ltda."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={getToken}
      stripeKey={publishableKey}
    />
  );
};
export default SrtipeCheckoutButton;
