import { createBrowserRouter, Navigate} from "react-router-dom";
import {ROUTES} from '../constants/routes';



export const router = createBrowserRouter([
    {
        path:"/",
        element:<Navigate to={ROUTES.LOGIN} replace/>      
    },
    {
        
    }
])