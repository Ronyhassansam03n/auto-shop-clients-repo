import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Main from "../Layout/Main/Main";
import About from "../Pages/Common/Header/AboutUs/About";
import Blogs from "../Pages/Common/Header/Blogs/Blogs";
import Categories from "../Pages/Common/Header/Categories/Categories";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:[
            
               {

                path: '/',
                element: <Home></Home>
                
               },
               {
                path: '/categories',
                element: <Categories></Categories>

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
                path:'/login',
                element: <Login></Login>
               },
               {
                path: '/signUp',
                element: <SignUp></SignUp>

               }
               
               
            
        ]
    }


])

export default router;