import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from '../../BuyModal/BuyModal';
import Product from '../Product/Product';


const Category = () => {

    const carData = useLoaderData()
    const [book, setBook] = useState(null)
    const cars = carData?.data;





    return (
        <div>
            <h1 className='lg:text-4xl font-bold md:text-2xl mx-5'> Cars for Resale !</h1>

            <div className=' grid md:grid-cols-1 mx-auto  lg:grid-cols-3   gap-20 mt-5 mb-10 '>


                {
                    cars?.map(car => <Product
                        key={car._id}
                        car={car}
                        setBook={setBook}
                    ></Product>)

                }
            </div>


            {book &&

                <BuyModal
                    book={book}
                    setBook={setBook}
                ></BuyModal>
            }
        </div>
    );
};

export default Category;