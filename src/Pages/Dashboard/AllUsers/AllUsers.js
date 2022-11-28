import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

import Spinner from '../../../Spinner/Spinner';

const AllUsers = () => {


    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://auto-shop-server.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    const handleAdmin = id => {
        fetch(`https://auto-shop-server.vercel.app/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('admin added')
                    refetch()
                }
                console.log(data)
            })
    }

    const handleDelete = id => {
        fetch(`https://auto-shop-server.vercel.app/users/admin/${id}`, {
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
            <h1 className='text-3xl mb-5'> All of My Buyers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ROLE</th>
                            <th>MAKE ADMIN</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td >{user.role}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-outline'>Make Admin</button>}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-outline'>Delete</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;