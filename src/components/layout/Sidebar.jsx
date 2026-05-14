import { NavigationData } from "../../data/navigationData";
import { NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
export default function Sidebar(){
    const {role} = useRole();
    const visibleLinks = NavigationData.filter(item=>item.role.includes(role));
    console.log(role, visibleLinks)
    return(
        <aside className="border w-64 p-4 bg-gray-700 space-y-6">
            <h1 className="text-xl mb-6 font-bold text-white">Sales Nest</h1>
            <nav>
                {
                    visibleLinks.map((link)=>(
                        <NavLink key={link.label} className={({isActive})=>`block rounded-lg px-4 py-2 ${isActive?"bg-white text-black":"text-white"}`} to={link.path}>{link.label}</NavLink>
                    ))
                }
            </nav>
        </aside>
    )
}