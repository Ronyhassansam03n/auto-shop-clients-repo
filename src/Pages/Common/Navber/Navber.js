import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoHome from '../../../assets/homelogo/360_F_299134059_j7cI3ZKP7wLpbiZ7RKrr6MrANfVntlHT.jpg'
import { AuthContext } from '../../../Authentication/Contexts/AuthProvider';

const Navber = () => {

const {user, logOut} = useContext(AuthContext)

const handleLogOut =() =>{

    logOut()
    .then(() =>{})
    .catech(error => console.log(error))
}


    const menuItems = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About us</Link></li>


        {user?
             <>
           <li><Link to='/dashboard'>Dashboard</Link></li>
           <li><button onClick={handleLogOut}> Logout</button></li>
           </>
           :
           <>

           <li><Link to='/login'>Login</Link></li>
           <li><Link to='/signUp'>Sign up</Link></li>
           </>
        }
      

    </>
    return (

        <div>

            <div className="navbar">

                <div className="navbar-">

                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            {menuItems}
                        </ul>

                    </div>
                    <Link to='/' > <img className='w-1/4' src={LogoHome} alt=''></img> </Link>
                </div>



                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal p-0">

                        {menuItems}

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navber;