import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from '../../BuyModal/BuyModal';
import Product from '../Product/Product';


const Category = () => {

    const carData = useLoaderData()
    console.log(carData)
    return (
        <div>
            <h1 className='text-4xl font-bold md: text-2xl text-center'> Cars for Resale !</h1>

            <div className=' grid  md: grid-cols-1 mx-auto lg: grid-cols-3 gap-20 mt-5 mb-10 '>


                {
                    carData.map(car => <Product
                        key={car._id}
                        car={car}


                    ></Product>)

                }
            </div>
            <BuyModal></BuyModal>
        </div>
    );
};

export default Category;