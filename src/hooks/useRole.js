import { useAuthContext } from "../context/AuthContext";
export default function useRole(){
    const {user} = useAuthContext();
    const role = user?.role || "Agent";
    return {role, isAdmin: role==="Admin", isManger:role==="Manager", isAgent:role==="Agent"};
}