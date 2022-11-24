import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Main from "../Layout/Main/Main";
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
                path:'/login',
                element: <Login></Login>
               },
               {
                path: '/signup',
                element: <SignUp></SignUp>

               }
            
        ]
    }


])

export default router;