import { useAuthContext } from "../context/AuthContext"
export default function DashboardPage(){
    const {logout} = useAuthContext();
    return(
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}