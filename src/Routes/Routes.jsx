import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/toys')
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addAToy',
            element: <AddAToy></AddAToy>
        },
        {
            path: '/toys',
            element: <AllToys></AllToys>,
            // loader: () => fetch('http://localhost:5000/toys?limit=3')
        }
      ]
    },
  ]);

  export default router;