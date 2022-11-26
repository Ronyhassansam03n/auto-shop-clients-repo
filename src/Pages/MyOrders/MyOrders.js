import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])



    return (



        <div className='mt-5'>
            <h1 className='text-3xl font-bold mb-5'> My Orders</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr>

                                <th>{i + 1}</th>
                                <td>
                                    <img className="mask mask-squircle w-12 h-12 avatar" src={order.picture} alt="Avatar" />
                                </td>
                                <td>{order.carName}</td>
                                <td>$ {order.sellPrice}</td>
                                <td> <button className="btn btn-black btn-xs">Checkout</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;