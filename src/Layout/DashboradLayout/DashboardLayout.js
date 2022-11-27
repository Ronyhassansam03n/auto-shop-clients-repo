import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Navber from '../../Pages/Common/Navber/Navber';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dash-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <p className='text-xl mx-auto'>DashBoard</p>
                        {
                            !user &&
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                            </>
                        }

                        {
                            isAdmin &&

                            <>
                                <li><Link to='/dashboard/allUsers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addProducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProducts'> My Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;