import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import SignPic from '../../../src/assets/signup/signpic.gif'

import { AuthContext } from '../Contexts/AuthProvider';


const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext)

  const navigation = useNavigate();


  const handleSignUp = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)

        const userInfo = {
          displayName: data.name,
          account: data.seller
        }

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.seller)
            toast.success('user create successfully')
          })
          .catch(error => console.log(error))
      })
      .catch(error => {
        console.log(error)

      });
  }
  const saveUser = (name, email, seller) => {

    const user = { name, email, seller };
    fetch('https://auto-shop-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        navigation('/')

      })
  }





  return (

    <div className="hero   mb-10">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="hero-content flex-col lg:flex-row">

          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-center mb-5" >Sign Up now!</h1>

            <img src={SignPic} alt=''></img>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">


              <h1 className="text-2xl font-semibold text-center">Sign Up </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text"  {...register("name")} placeholder="name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text"  {...register("email")} placeholder="email" name='email' className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"   {...register("password")} placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <Link to='/login' className="label-text-alt link link-hover">Already have an account!</Link>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Buyer account</span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Seller account</span>
                  <input type="checkbox" {...register("seller")} name='seller' className="toggle" />
                </label>
              </div>




              <div className="form-control mt-6">
                <button className="btn btn-outline">Sign Up</button>

              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SignUp;