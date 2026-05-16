import { X } from "lucide-react";
export default function Modal({isModalOpen, closeModal, children}){
    if(!isModalOpen) return null;
    return(
        <div className="min-h-screen border fixed top-0 left-0 w-full bg-gray-900/40 flex items-center justify-center">
            <div className="w-md bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">Add Lead</p> 
                    <button className="cursor-pointer" onClick={closeModal}><X/></button>
                </div>
                {
                    children
                }
            </div>

        </div>
    )
}