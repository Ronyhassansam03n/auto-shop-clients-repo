import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const Payment = () => {


    const bookigPayment = useLoaderData()

    const { carName, sellPrice } = bookigPayment;

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
    console.log(process.env.REACT_APP_STRIPE)

    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'> Please Payment Here !</h1>

            <p> Car Name : {carName}</p>
            <p>  Please Pay  : $ <strong className='text-error'> {sellPrice}</strong>  </p>

            <div className=' w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookingPayment={bookigPayment}

                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;