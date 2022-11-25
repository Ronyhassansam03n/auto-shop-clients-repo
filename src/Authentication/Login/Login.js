
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginPic from '../../../src/assets/Login/loginpic.webp'


const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = data => {

    console.log(data)
  }

  return (
    <div className="hero  mb-10">
       <form onSubmit={handleSubmit(handleLogin)}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl text-center font-bold mb-5">Login now!</h1>

          <img src={LoginPic} alt=''></img>

        </div>

       
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-2xl font-semibold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>

                </label>

                <input type="text" {...register("email", {
                  required: "Please Enter you valid email"

                })} placeholder="email" className="input input-bordered" required />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

              </div>
              <div className="form-control">

                <label className="label">

                  <span className="label-text">Password</span>

                </label>

                <input type="password" {...register("password", {

                  required: "Please Enter you valid password"
                }

                )} placeholder="password" className="input input-bordered" required />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                <label className="label">

                  <Link to='/signup' className="label-text-alt link link-hover">Create a new account!</Link>

                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-outline" value="LOGIN" type="submit" />


                <div className="divider">OR</div>
                <button className="btn btn-outline ">Login Via google</button>
              </div>
            </div>
          </div>
        
      </div>
      <div>
      </div>
      </form>
    </div>
  );
};

export default Login;