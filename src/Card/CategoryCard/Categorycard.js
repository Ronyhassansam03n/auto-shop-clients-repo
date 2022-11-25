import React from 'react';
import { Link } from 'react-router-dom';

const Categorycard = ({ category,  }) => {

    const { _id, brands, img, short } = category;


    return (


        <div >
            <div className="card w-80 bg-base-200 shadow-xl mt-5 mb-10">
                <figure><img  className='w-full' src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brands}</h2>
                    <p> {short}</p>
                    <div className="card-actions justify-end">
               <Link to={`/products/${_id}`}><button  className="btn btn-outline btn-sm">Buy Now</button></Link>         
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categorycard;