
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Spinner/Spinner';



const AllSellers = () => {

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://auto-shop-server.vercel.app/users/seller')
            const data = await res.json();
            return data;
        }

    })


    const handleDelete = id => {
        fetch(`https://auto-shop-server.vercel.app/users/seller/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete Successfully')
                    refetch()
                }
                console.log(data)

            })

    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (

        <div>
            <h1 className='text-2xl font-semibold mb-5 '> My Sellers</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ACTION</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-xs btn-outline'>Verify</button></td>
                                <td> <button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-outline'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllSellers; 