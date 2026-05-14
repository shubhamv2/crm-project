import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";
export default function PublicRoutes({children}){
    const {isAuthenticated} = useAuthContext();
    if(!isAuthenticated){
        return children;
    }
    return <Navigate to={ROUTES.DASHBOARD} replace/>
}