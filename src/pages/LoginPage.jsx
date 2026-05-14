import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <form className="w-screen h-screen md:h-80 md:w-md rounded-xl p-7 flex flex-col gap-4 shadow-xl bg-white justify-center">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="">
                <input type="email" className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your email" />
            </div>
            <div className="flex items-center relative">
                <input type={isVisible?"text":"password"} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your password" />
                <button type="button" className="cursor-pointer absolute right-4 text-gray-400" onClick={()=>setIsVisible(prev=>!prev)}>

                    {
                        !isVisible ? <Eye /> : <EyeOff />

                    }
                </button>
            </div>
            <button className="bg-black text-white p-3 rounded-md text-lg font-semibold cursor-pointer">Login</button>

            <p className="text-sm">Don't have an account?{" "} <Link className="text-blue-500 underline font-semibold" to="/register">Register</Link></p>
        </form>
    )
}   