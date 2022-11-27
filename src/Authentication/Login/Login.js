
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginPic from '../../../src/assets/Login/loginpic.webp'
import { AuthContext } from '../Contexts/AuthProvider';


const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const { signIn, providerLogin } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()

  const navigation = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathName || '/';


  const handleLogin = data => {

    console.log(data)
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast.success('user login successfully')
        navigation(from, { replace: true });


      })

      .catch(error => console.log(error))

  }


  const googleLogin = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user)
        toast.success('user login successfully')
        navigation(from, { replace: true });


      })

      .catch(error => console.log(error))
  }


  return (
    <div className="hero  mb-10">

      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl text-center font-bold mb-5">Login now!</h1>

          <img src={LoginPic} alt=''></img>

        </div>


        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
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

              </div>
            </form>

            <div className="divider">OR</div>
            <button onClick={googleLogin} className="btn btn-outline ">Login Via google</button>
          </div>



        </div>

      </div>
      <div>
      </div>
    </div>
  );
};

export default Login;