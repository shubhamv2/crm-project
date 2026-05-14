export default function KPICard({title, value}){
    return(
        <div className="shadow-md flex-1 p-4 rounded-md space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    )
}