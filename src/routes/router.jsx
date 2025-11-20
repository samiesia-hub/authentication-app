import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from       "../pages/Login";
import Signup from      "../pages/Signup";
import Dashboard from   "../pages/Dashboard.jsx";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/dashboard", element:
    <PrivateRoute>
        <Dashboard />
    </PrivateRoute> 
     },
]);