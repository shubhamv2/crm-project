export default function Button({title,...props}){
    return(
        <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer text-sm font-semibold" {...props}>{title}</button>
    )
}