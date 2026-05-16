export default function ConfirmDelete({deletingLead,handleDeletingCancel,handleDeletingConfirm}){
    return (
        <div className="space-y-3">
            <p className="text-sm text-gray-600">Are you sure deleting lead?</p>
            <div className="flex gap-6">
                <button className="text-white bg-red-600 px-6 py-2 rounded-md cursor-pointer" onClick={()=>handleDeletingConfirm(deletingLead.id)}>Yes</button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md cursor-pointer" onClick={handleDeletingCancel}>No</button>
            </div>
        </div>
    )
}