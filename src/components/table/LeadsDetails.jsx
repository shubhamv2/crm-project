import { X, Trash, SquarePen } from "lucide-react";
export default function LeadsDetails({ selectedLead, closeDetailsPanel,handleLeadDelete, handelLeadEdit }) {
    if (!selectedLead) return null;
    console.log(selectedLead)
    return (
        <div className="w-full xl:w-60 px-4 shadow-md space-y-3">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-bold">Lead Details</h2>
                <div className="flex items-center gap-2">
                    <button onClick={()=>handelLeadEdit(selectedLead)}><SquarePen size={18} /></button>
                    <button onClick={()=>handleLeadDelete(selectedLead)}><Trash size={18} /></button>
                    <button onClick={closeDetailsPanel} className="cursor-pointer"><X /></button>
                </div>
            </div>
            <div className="space-y-4">

                <div>
                    <h3 className="text-lg font-bold">{selectedLead.name}</h3>
                    <p className="text-sm text-gray-400">{selectedLead.company}</p>
                </div>
                <div>
                    <p className="text-sm"><span className="font-semibold">Email:{" "}</span>{selectedLead.email}</p>
                    <p className="text-sm"><span className="font-semibold">Phone:{" "}</span>{selectedLead.phone}</p>
                    <p className="text-sm"><span className="font-semibold">Status:{" "}</span>{selectedLead.status}</p>
                    <p className="text-sm"><span className="font-semibold">Assigned To:{" "}</span>{selectedLead.assignedTo}</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold">Notes</h3>
                    <div>
                        {
                            selectedLead.notes.map(item=>(<p>{item}</p>))
                        }
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Activities</h3>
                    <div>
                        {
                            selectedLead.activities.map(item=>(<p>{item}</p>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}