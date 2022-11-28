import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../Spinner/Spinner';


const Sellproduct = () => {
    const { register, handleSubmit } = useForm();
    const nevigate = useNavigate()


    const { data: myProducts, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://auto-shop-server.vercel.app/addProductsCategories')
            const data = await res.json();
            return data;
        }
    })



    const handleAddProducts = data => {
        const product = {
            model: data.name,
            price: data.price,
            original: data.original,
            contact: data.number,
            area: data.location,
            condition: data.condition,
            purchase: data.purchase,
            selete: data.categories,
            description: data.description
        }


        fetch('https://auto-shop-server.vercel.app/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Congratulation! Product added')
                    nevigate('/dashboard/myProducts')
                }

            })




    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mx-5'>
            <h1 className='text-2xl font-semibold mb-5 '> Add A Product Here !</h1>

            <form onSubmit={handleSubmit(handleAddProducts)}>
                <div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-xl font-semibold text-center">Products information </h1>

                            <input type="text"  {...register("name")} placeholder=" Enter Product Name" className="input input-bordered input-sm w-full" />


                            <input type="text"  {...register("price")} placeholder="Product Resale Price" className="input input-bordered input-sm w-full" />


                            <input type="text"  {...register("original")} placeholder=" Product Original Price" className="input input-bordered input-sm w-full " />


                            <input type="text"  {...register("number")} placeholder="Contact Number" className="input input-bordered input-sm w-full" />


                            <input type="text"  {...register("location")} placeholder="Location" className="input input-bordered input-sm w-full " />


                            <input type="text"  {...register("condition")} placeholder=" Product Condition" className="input input-bordered input-sm w-full " />


                            <input type="text"  {...register("purchase")} placeholder="Year of purchase" className="input input-bordered input-sm w-full" />


                            <select   {...register("categories")} className="select select-bordered select-sm w-full max-w-xs">
                                <option selected>Selete Categories</option>
                                {
                                    myProducts.map(product => <option
                                        key={product._id}
                                        value={product.brands}

                                    >{product.brands}</option>)
                                }
                            </select>
                            <textarea  {...register("description")} className="textarea textarea-primary" placeholder=" Write Product Description "></textarea>

                            <div className="form-control mt-6">
                                <button className="btn btn-sm btn-outline font-bold">Add Product</button>

                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Sellproduct;