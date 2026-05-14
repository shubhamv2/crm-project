import { Link } from "react-router-dom"
export default function RegisterPage() {
    return (
        <div className="p-7 bg-white shadow-xl space-y-4">
            <h1 className="text-2xl font-bold">Register</h1>
            <form className="w-md flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label>Name</label>
                    <input type="text" className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input type="email" className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your email" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Phone</label>
                    <input type="text" className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your phone" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <input type="password" className="border border-gray-400 w-full p-3 outline-none rounded-md" placeholder="Your password" />
                </div>
                <button className="bg-black text-white p-3 rounded-md text-lg font-semibold cursor-pointer ">Register</button>
                <p className="text-sm">Already have an account? {" "} <Link className="text-blue-500 font-semibold underline" to="/login">Login</Link></p>
            </form>

        </div>
    )
}