import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {useAuthContext} from '../context/AuthContext';
import {ROUTES} from '../constants/routes';
export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        company: "",
        tenantId:"",
        password: "",
    });

    const navigate = useNavigate();
    const {register} = useAuthContext();
    const onChangeHandler = (e) =>{
        const {name, value} = e.target;
        setFormData(prev=>({...prev, [name]:value}))
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        register(formData);
        navigate(ROUTES.DASHBOARD);

    }

    return (
        <div className="p-6 bg-white shadow-xl space-y-3">
            <h1 className="text-2xl font-bold">Register</h1>
            <form className="w-md flex flex-col gap-2" onSubmit={onSubmitHandler}>
                <div className="flex flex-col gap-0.5">
                    <label className="text-sm">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={onChangeHandler} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <label className="text-sm">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={onChangeHandler} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your email" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <label className="text-sm">Role</label>
                    <select name="role" name="role" value={formData.role} onChange={onChangeHandler} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your phone">
                        <option value="">Select role</option>
                        <option value="Admin">Admin</option>
                        <option value="Agent">Agent</option>
                        <option value="Manager">Manager</option>
                    </select>

                </div>
                <div className="flex flex-col gap-0.5">
                    <label className="text-sm">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={onChangeHandler} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Company name" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <label className="text-sm">Tenant Id</label>
                    <input type="tenant-Id" name="tenantId" value={formData.tenantId} onChange={onChangeHandler} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Tenant Id" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <label className="text-sm">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={onChangeHandler} className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your password" />
                </div>

                <button className="bg-black text-white p-3 rounded-md text-lg font-semibold cursor-pointer ">Register</button>
                <p className="text-sm">Already have an account? {" "} <Link className="text-blue-500 font-semibold underline" to="/login">Login</Link></p>
            </form>

        </div>
    )
}