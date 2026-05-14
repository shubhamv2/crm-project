import { Bell, CircleUser, ChevronDown, Search, ChevronUp } from "lucide-react"
import { useAuthContext } from "../../context/AuthContext"
import { useState } from "react";
export default function Navbar() {
    const { user,logout } = useAuthContext();
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    return (
        <header className="h-16 bg-white shadow-sm flex items-center gap-30 p-6 justify-end">
            <div className="flex border border-gray-400 items-center rounded-lg relative">
                <input placeholder="Globle search..." type="text" className="w-100 outline-none p-2"/>
                <Search className="mr-2"/>
            </div>
            <div className="flex items-center gap-5">
                <Bell />
                <div className="flex items-center gap-1">
                    <CircleUser size={40} strokeWidth={1} />
                    <div>
                        <h2 className="text-md font-semibold">{user.name.split(" ")[0]}</h2>
                        <p className="text-sm">{user.role}</p>
                    </div>
                    <button className="cursor-pointer" onClick={()=>setIsOpenDropdown(prev=>!prev)}>
                        {
                           !isOpenDropdown? <ChevronDown strokeWidth={2} />:<ChevronUp strokeWidth={2}/>
                        }
                    </button>
                </div>
            </div>

            {
                isOpenDropdown && (<div className="absolute top-17 right-5 bg-gray-300 z-40 flex flex-col items-center rounded-lg shadow-lg gap-2 p-6 w-65">
                    <div className="flex flex-col items-center">
                        <CircleUser size={65} strokeWidth={1}/>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-lg">({user.company})</p>
                    </div>
                    <div>
                        <button onClick={logout} className="cursor-pointer">Logout</button>
                    </div>
                </div>)
            }
        </header>
    )
}