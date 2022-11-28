
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Spinner/Spinner';



const AllSellers = () => {

    const { data: sellers, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller')
            const data = await res.json();
            return data;
        }

    })

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
                                <td> <button className='btn btn-xs btn-outline'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllSellers; 