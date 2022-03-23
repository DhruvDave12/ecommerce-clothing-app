import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    // stripe needs the price in cents
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KgQFKSHxEryhSME1xSO8yyX0Hifnpd6GVjYz7yKoKY6NUsaRO9Y4DL0cb3qJ4xCOkFEqLTWitvoaTbwlDFNRdhX00Rc6SLN8g";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="DHRUV Cloting Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;