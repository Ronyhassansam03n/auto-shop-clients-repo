import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import PrivateRoute from "../Authentication/PrivateRoute/PrivateRoute";
import SignUp from "../Authentication/SignUp/SignUp";
import Categorry from "../Card/Category/Category";
import DashboardLayout from "../Layout/DashboradLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import About from "../Pages/Common/Header/AboutUs/About";
import Blogs from "../Pages/Common/Header/Blogs/Blogs";
import Categories from "../Pages/Common/Header/Categories/Categories";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Home from "../Pages/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders";


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
                loader: async ({ params }) => axios(`http://localhost:5000/products-car?brands=${params.id}`)
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
                element: <AllUsers></AllUsers>
            },
        ]

    }



])

export default router;