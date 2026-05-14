import { Outlet } from "react-router-dom"
export default function AuthLayout(){
    return(
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        
                <Outlet/>
        </div>
    )
}