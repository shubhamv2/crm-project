import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext"
import { ROUTES } from "../../constants/routes";
export default function RoleGuard({children,allowedRoles}){
    const {user} = useAuthContext();
    if(allowedRoles && allowedRoles.includes(user.role)){
        return children;
    }
    return <Navigate to={ROUTES.DASHBOARD} replace/>
}