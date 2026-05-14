import { Eye, EyeOff, User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { ROUTES } from "../constants/routes";
export default function LoginPage() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });
    const [isVisible, setIsVisible] = useState(false);
    const {login} = useAuthContext();
    const navigate = useNavigate();
    const onChangeHandler = (e) =>{
        const {name, value} = e.target;
        setFormData(prev=>({...prev, [name]:value}));
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        login(formData);
        navigate(ROUTES.DASHBOARD);
    }
    return (
        <form className="w-screen h-screen md:h-80 md:w-md rounded-xl p-7 flex flex-col gap-4 shadow-xl bg-white justify-center" onSubmit={onSubmitHandler}>
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="flex border  rounded-md overflow-hidden">
                <span className="p-3 bg-black text-white">
                    <User/>
                </span>
                <input type="email" name="email" value={formData.email} onChange={onChangeHandler} className=" w-full p-3 outline-none " placeholder="Your email" />
            </div>
            <div className="flex items-center relative border rounded-md overflow-hidden">
                <span className="bg-black text-white p-3">

                    <Lock/>
                </span>
                <input name="password" value={formData.password} onChange={onChangeHandler} type={isVisible?"text":"password"} className=" w-full p-3 outline-none" placeholder="Your password" />
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