import { useState } from "react"
export default function LeadsTable({ lead, setSelectedLead }) {
    return (
        <div className="min-h-85">

            <table className="w-full text-sm text-left">
                <thead className="bg-gray-200">
                    <tr className="">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Company</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Assigned To</th>

                    </tr>
                </thead>
                <tbody className="overflow-y-auto">
                    {
                        lead?.map(lead => (
                            <tr key={lead.id} onClick={()=>setSelectedLead(lead)} className="cursor-pointer">
                                <td className="px-4 py-2 border-b border-gray-200">{lead.name}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{lead.email}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{lead.phone}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{lead.company}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{lead.status}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{lead.assignedTo}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}