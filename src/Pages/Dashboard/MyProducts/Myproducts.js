import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Authentication/Contexts/AuthProvider';

const Myproducts = () => {

    const { user } = useContext(AuthContext)

    const [addMyProducts, setAddMyProducts] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/addProducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAddMyProducts(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-3xl font-semibold'> Your Products</h1>
            {addMyProducts.length}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MODEL</th>
                            <th>CATEGORY</th>
                            <th>SELL PRICE</th>
                            <th>ORIGINAL PRICE</th>
                            <th>DELETE</th>
                            <th>ADVERTISE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            addMyProducts?.map((addMyProduct, i) => <tr key={addMyProduct._id}>

                                <th>{i + 1}</th>
                                <td>{addMyProduct.model}</td>
                                <td>{addMyProduct.selete}</td>
                                <td>$ {addMyProduct.price}</td>
                                <td>$ {addMyProduct.original}</td>
                                <td> <button className="btn btn-black btn-outline btn-xs">Remove</button></td>
                                <td> <button className="btn btn-black btn-outline btn-xs">Advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myproducts;