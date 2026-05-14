import { createBrowserRouter, Navigate} from "react-router-dom";

import { ROUTES } from "../constants/routes";
import AuthLayout from '../components/layout/AuthLayout'
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage';
import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardPage from '../pages/DashboardPage';
import LeadsPage from '../pages/LeadsPage';
import ContactsPage from '../pages/ContactsPage';
import ReprotsPage from '../pages/ReportsPage';
import SettingsPage from '../pages/SettingsPage';
import NotFoundPage from '../pages/NotFoundPage';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Navigate to={ROUTES.LOGIN} replace/>      
    },
    {
        element:<AuthLayout/>,
        children:[
            {path:ROUTES.LOGIN, element:<LoginPage/>},
            {path:ROUTES.REGISTER, element:<RegisterPage/>}
        ]
    },
    {
        element:<DashboardLayout/>,
        children:[
            {path:ROUTES.DASHBOARD, element:<DashboardPage/>},
            {path:ROUTES.LEADS, element:<LeadsPage/>},
            {path:ROUTES.CONTACTS, element:<ContactsPage/>},
            {path:ROUTES.REPORTS, element:<ReprotsPage/>},
            {path:ROUTES.SETTINGS, element:<SettingsPage/>}
        ]
    },
    {
        path:"*",
        element:<NotFoundPage/>
    }

])