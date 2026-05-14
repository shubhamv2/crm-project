import { ROUTES } from "../../constants/routes";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function ProtectedRoutes({children}){
    const {isAuthenticated} = useAuthContext();
    if(!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace/>
    return children;
}