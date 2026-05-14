import { recentActivities } from "../../data/dashboardData"
export default function RecentActivity(){
    return(
        <div className="space-y-4">
            {
                recentActivities.map(item=>(
                    <p>{item}</p>
                ))
            }
        </div>        
    )
}