import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from '../layout/Navbar';
export default function DashboardLayout(){
    return(
        <div className="min-h-screen flex bg-gray-50">
            <Sidebar/>
            <div className="flex-1">
                <Navbar/>
                <main className="p-6">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}   