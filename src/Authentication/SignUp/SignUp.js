import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import SignPic from '../../../src/assets/signup/signpic.gif'
import { AuthContext } from '../Contexts/AuthProvider';


const SignUp = () => {
  
  const { register, handleSubmit } = useForm();
  const {createUser, updateUser} = useContext(AuthContext)
  const navigation = useNavigate()
  
  

  const handleSignUp = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        toast.success('user create successfully')
        navigation('/')

        const userInfo= {
          displayName : data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(error => console.log(error))

       


    })
    .catch(error => console.log(error))


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
          <input type="text"  {...register("name")} placeholder="Name"  className="input input-bordered" />
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
          <input type="text"   {...register("password")} placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account!</Link>
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