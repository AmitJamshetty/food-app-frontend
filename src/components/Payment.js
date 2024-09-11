import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

    const total = useSelector((store) => store.cart.total)
    // console.log("Payment Total: ", total);

    const makePayment = (token) => {
        const body = {
            token,
            product: {
                name: "React from FB",
                price: total,
                productBy: "facebook"
            }
        }

        const headers = {
            "Content-Type": "application/json"
        }

        return fetch('http://localhost:8000/payment', {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }).then((response) => {
            const { status } = response
            console.log("STATUS", status);
        }).catch((err) => { console.log(err) })
    }

    return (
         <div>
         <StripeCheckout
             stripeKey='pk_test_51PxBVhRrxOsiZXUWA6Jf8wVDsfPVhuYFa1BIbd07FL8QpgILWt5a2TQWVG8JZBJEPaxTA6COrEmuR6MwNJTH76KU00NJhG0Ljh'
             token={makePayment}
             name="Buy React"
             amount={total * 100} // Multiply by 100 to convert to cents for Stripe
         >
             <button className="bg-blue-700 py-2 px-5 text-white m-4">
                 Total - ₹ {total}
             </button>
         </StripeCheckout>
     </div>
    )
}

export default Payment