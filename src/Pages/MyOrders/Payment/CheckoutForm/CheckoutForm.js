import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ bookingPayment }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { sellPrice, email } = bookingPayment;

    useEffect(() => {

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({ sellPrice }),

        })

            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [sellPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        Email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError.message)
        }
        if (paymentIntent.status === "succeeded") {

        }
        console.log(paymentIntent)
    }

    return (



        <div>

            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='font-bold btn btn-sm btn-outline mt-5'
                        type="submit"
                        disabled={!stripe}>
                        Pay
                    </button>
                </form>
                <p className='text-red-500 mt-2'>{cardError}</p>

            </>
        </div>
    );
};

export default CheckoutForm;