import { recentActivities } from "../../data/dashboardData"
export default function RecentActivity(){
    return(
        <div className="space-y-4">
            {
                recentActivities.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))
            }
        </div>        
    )
}