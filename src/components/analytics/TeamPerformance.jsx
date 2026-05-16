import { teamPerformance } from "../../data/dashboardData"
export default function TeamPerformance(){
    return(
        <div className="space-y-4">
            {
                teamPerformance.map((item,index)=>(
                    <div key={index} className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-xl font-bold">{item.deals}</p>
                    </div>
                ))
            }
        </div>
    )
}