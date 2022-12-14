import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Authentication/Contexts/AuthProvider';

const Myproducts = () => {

    const { user } = useContext(AuthContext)

    const [addMyProducts, setAddMyProducts] = useState([])

    useEffect(() => {

        fetch(`https://auto-shop-server.vercel.app/addProducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAddMyProducts(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'> Your Products.</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MODEL</th>
                            <th>CATEGORY</th>
                            <th>SELL PRICE</th>
                            <th>ORIGINAL PRICE</th>



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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myproducts;