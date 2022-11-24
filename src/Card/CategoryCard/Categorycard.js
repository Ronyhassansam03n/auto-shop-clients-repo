import React from 'react';

const Categorycard = ({ category }) => {

    const { brands, img, short } = category;


    return (


        <div >
            <div className="card w-80 bg-base-200 shadow-xl mt-5 mb-10">
                <figure><img  className='w-full' src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brands}</h2>
                    <p> {short}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-sm">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categorycard;