import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';

const MyOrders = () => {
    const { user, isLoading } = useContext(AuthContext)

    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch(`https://auto-shop-server.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    const handleDelete = _id => {
        fetch(`https://auto-shop-server.vercel.app/bookings/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete Successfully')
                }
                console.log(data)

            })

    }
    if (isLoading) {
        return <Spinner></Spinner>
    }


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
                            orders?.map((order, i) => <tr key={order._id}>

                                <th>{i + 1}</th>
                                <td>
                                    <img className="mask mask-squircle w-12 h-12 avatar" src={order.picture} alt="Avatar" />
                                </td>
                                <td>{order.carName}</td>
                                <td>$ {order.sellPrice}</td>


                                <td>

                                    {
                                        !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className="btn btn-black btn-outline btn-xs">Pay</button>
                                        </Link>

                                    }

                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;