import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {

    const carData = useLoaderData()
    console.log(carData)
    return (
        <div>
            <p>  {carData.length}</p>
        </div>
    );
};

export default Category;