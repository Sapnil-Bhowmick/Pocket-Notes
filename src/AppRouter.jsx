import { createBrowserRouter , Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";


const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigate  to="/home" />
    } ,

    {
        path: "/home",
        element: <HomePage />
    }
])


export default AppRouter