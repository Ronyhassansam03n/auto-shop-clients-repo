import React from 'react';

const Product = ({ car, setBook }) => {


    const { name, brands, location, resale, original, year, seller, img } = car;


    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl">

                <figure className="px-10 pt-10">

                    <img src={img} alt="Shoes" className="rounded-xl" />

                </figure>

                <div className="card-body items-center text-center">


                    <h2 className="card-title text-error font-semibold"> {name} </h2>

                    <p> Brand Name : {brands}</p>
                    <p> Location : {location}</p>
                    <p> Resale Price : ${resale} </p>
                    <p> Original Price : ${original}</p>
                    <p> Used Year : {year}</p>
                    <p> Seller : {seller}</p>


                    <div className="card-actions">

                        <button className="btn btn-black btn-outline btn-sm">Report</button>
                        <label

                            htmlFor="buy-modal"

                            className="btn btn-black btn-outline btn-sm"

                            onClick={() => setBook(car)}
                        >Add to Cart</label>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;