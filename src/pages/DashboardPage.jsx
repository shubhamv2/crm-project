import { useAuthContext } from "../context/AuthContext";
import { KPICardsData } from "../data/dashboardData";
import KPICard from "../components/analytics/KPICard";
import TeamPerformance from "../components/analytics/TeamPerformance";
import RecentActivity from "../components/timeline/RecentActivity";
export default function DashboardPage() {
    const { logout } = useAuthContext();
    return (
        <div>
            <div className="mb-4">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome! Here you can seen sales peformance</p>
            </div>

            <div className="space-y-4">
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {
                        KPICardsData.map(item=>(
                            <KPICard key={item.label} title={item.label} value={item.value}/>
                        ))
                    }
                </div>

                <div className="grid gap-4 md:grid-cols-1 xl:grid-cols-2">
                    <div className="broder p-6 shadow-lg rounded-md h-75 space-y-4">
                        <h3 className="text-lg font-semibold">Recent Activity</h3>
                        <RecentActivity/>
                    </div>
                    <div className="broder p-6 shadow-lg rounded-md h-75 space-y-4">
                        <h3 className="text-lg font-semibold">Top Performers</h3>
                        <TeamPerformance/>
                    </div>
                </div>

            </div>

        </div>
    )
}