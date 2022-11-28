import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../Authentication/AdminRoute/AdminRoute";
import Login from "../Authentication/Login/Login";
import PrivateRoute from "../Authentication/PrivateRoute/PrivateRoute";
import SellerRoute from "../Authentication/SellerRoute/SellerRoute";
import SignUp from "../Authentication/SignUp/SignUp";
import Categorry from "../Card/Category/Category";
import DashboardLayout from "../Layout/DashboradLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import About from "../Pages/Common/Header/AboutUs/About";
import Blogs from "../Pages/Common/Header/Blogs/Blogs";
import Categories from "../Pages/Common/Header/Categories/Categories";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Sellproduct from "../Pages/Dashboard/AllSellers/SellProduct/Sellproduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Myproducts from "../Pages/Dashboard/MyProducts/Myproducts";
import Report from "../Pages/Dashboard/Report/Report";
import Home from "../Pages/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Payment from "../Pages/MyOrders/Payment/Payment";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {

                path: '/',
                element: <Home></Home>

            },
            {
                path: '/categories',
                element: <Categories></Categories>

            },

            {
                path: '/categories/:id',
                element: <PrivateRoute><Categorry /></PrivateRoute>,
                loader: async ({ params }) => axios(`https://auto-shop-server.vercel.app/products-car?brands=${params.id}`)
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>

            },
            {
                path: '/about',
                element: <About></About>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>

            }

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {

                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {

                path: '/dashboard/allUsers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {

                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {

                path: '/dashboard/report',
                element: <AdminRoute><Report></Report></AdminRoute>
            },
            {

                path: '/dashboard/addProducts',
                element: <SellerRoute> <Sellproduct></Sellproduct></SellerRoute>
            },
            {

                path: '/dashboard/myProducts',
                element: <SellerRoute> <Myproducts></Myproducts> </SellerRoute>
            },
            {

                path: '/dashboard/payment/:id',
                element: <PrivateRoute> <Payment></Payment> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://auto-shop-server.vercel.app/bookings/${params.id}`)
            },
        ]

    }



])

export default router;