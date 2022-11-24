import React, { useEffect, useState } from 'react';
import Categorycard from '../../../../Card/CategoryCard/Categorycard';
import { useQuery } from '@tanstack/react-query';


const Categories = () => {

const {data:categories = [] } = useQuery({

    queryKey: ['categories'],

    queryFn: async() =>{
        const res = await fetch('http://localhost:5000/brandsCategories')
        const data = await res.json()
        return data;

    } 
   
})

    return (
        <div>
   <h1 className='text-4xl font-bold  mb-5'> Our Brands Categories</h1>

        <div className='grid lg: grid-cols-3'>
           
                {
                 
                   categories.map( category => <Categorycard
                   key={category.id}
                   category={category}
                   ></Categorycard>)
                }
        </div>
        </div>
    );
};

export default Categories;