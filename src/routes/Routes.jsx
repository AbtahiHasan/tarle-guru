import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Search from "../pages/Search";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/booking",
                element: <Booking/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/search",
                element: <Search/>
            }
        ]
    }
])

export default Routes