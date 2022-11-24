import React, { useEffect, useState } from 'react';
import Categorycard from '../../../../Card/CategoryCard/Categorycard';

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
           fetch('categories.json')
           .then(res => res.json())
           .then(data => setCategories(data))


    }, [])

    return (
        <div>
   <h1 className='text-4xl font-bold  mb-5'> Our Brands Categories</h1>


      
     
        <div className='grid lg: grid-cols-3'>
           
                {
                 
                   categories.map( category => <Categorycard
                   key={category._id}
                   category={category}
                   ></Categorycard>)
                }
        </div>
        </div>
    );
};

export default Categories;