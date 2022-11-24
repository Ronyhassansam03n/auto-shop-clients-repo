import React from 'react';
import { Link } from 'react-router-dom';
import LoginPic from '../../../src/assets/Login/loginpic.webp'


const Login = () => {
    return (
        <div className="hero min-h-screen  mb-10">
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
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <Link to='/signup' className="label-text-alt link link-hover">Create a new account!</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline">Login</button>

          
              <div className="divider">OR</div>
            <button className="btn btn-outline ">Login Via google</button>
  

        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;