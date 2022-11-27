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
        </div>
    );
};

export default Myproducts;