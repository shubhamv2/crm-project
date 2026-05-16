import { useState } from "react"
export default function LeadsForm({onFormSubmit, editingLead}) {
    const [formData, setFormData] = useState(editingLead || {
        name:"",
        email:"",
        phone:"",
        company:"",
        source:"",
    } )

    const onChangeHandler = (e) =>{
        setFormData(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        onFormSubmit(formData);
    }
    return (
        <form className="flex-wrap space-y-2" onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-0.5">
                <label className="text-sm">Name</label>
                <input className="w-full border px-4 py-2 rounded-md outline-none" type="text" placeholder="Name" name="name" onChange={onChangeHandler} value={formData.name}/>
            </div>

            <div className="flex flex-col gap-0.5">
                <label className="text-sm">Email</label>
                <input className="w-full border px-4 py-2 rounded-md outline-none" type="text" placeholder="Email" name="email" onChange={onChangeHandler} value={formData.email}/>
            </div>

            <div className="flex flex-col gap-0.5">
                <label className="text-sm">Phone</label>
                <input className="w-full border px-4 py-2 rounded-md outline-none" type="text" placeholder="Phone" name="phone" onChange={onChangeHandler} value={formData.phone}/>
            </div>

            <div className="flex flex-col gap-0.5">
                <label className="text-sm">Company</label>
                <input className="w-full border px-4 py-2 rounded-md outline-none" type="text" placeholder="Company" name="company" onChange={onChangeHandler} value={formData.company}/>
            </div>
            <div className="flex flex-col gap-0.5">
                <label className="text-sm">Source</label>
                <input className="w-full border px-4 py-2 rounded-md outline-none" type="text" placeholder="Source" name="source" onChange={onChangeHandler} value={formData.source}/>
            </div>

            <button className="bg-black text-white w-full px-4 py-2 rounded-md">Add lead</button>
        </form>
    )
}