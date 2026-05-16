import SearchInput from "../components/ui/SearchInput"
import Button from "../components/ui/Button";
import { useMemo, useState } from "react";
import Modal from "../components/modals/Modal";
import LeadsForm from "../components/forms/LeadsForm";
import LeadsTable from "../components/table/LeadsTable";
import { leadsData } from "../data/leadsData";
import Pagination from "../components/table/Pagination";
import usePagination from "../hooks/usePagination";
import LeadsDetails from "../components/table/LeadsDetails";
import { useLeadsContext } from "../context/LeadsContext";
import ConfirmDelete from "../components/ui/ConfirmDelete";
export default function LeadsPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const { addLead, leads, deleteLead, editLead } = useLeadsContext();
    const [deletingLead, setDeletingLead] = useState(null);
    const [editingLead, setEditingLead] = useState(null);
  

    const filteredData = useMemo(() => {
        return leads?.filter(lead => {
            const isSearchMatch = lead.name.toLowerCase().includes(search.toLowerCase()) || lead?.company?.toLowerCase().includes(search.toLowerCase());

            const isFilterSelected = filter ? lead.status === filter : true;

            return isSearchMatch && isFilterSelected
        })
    }, [leads, search, filter]);
    const { paginatedData, nextPage, prevPage, totalPages, currentPage } = usePagination(filteredData, 8);

    const handleAddLead = (formData) => { 
        
        addLead(formData);
        setIsModalOpen(false);
    }

    const handleLeadDelete = (lead) =>{
        setIsModalOpen(true);
        setDeletingLead(lead);
    }
    
    const handleLeadEdit = (lead) =>{
        setIsModalOpen(true);
        setEditingLead(lead);
    }
    
    const handleDeletingConfirm = (leadId) =>{
        deleteLead(leadId);
        setDeletingLead(null);
        setIsModalOpen(false);
        setSelectedLead(null);
    }

    const handleUpdateLead = (lead) =>{
        editLead(lead);
        setIsModalOpen(false);
        setEditingLead(null);
    }
    return (
        <div>
            <div className="flex gap-2">
                <div className="space-y-6 flex-1">

                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-semibold">Leads Page</h2>
                            <p className="text-sm text-gray-600">Here you can tack,update and add leads.</p>
                        </div>
                        <div className="flex gap-6 items-center">
                            <SearchInput search={search} setSearch={(e) => setSearch(e.target.value)} />
                            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border px-4 py-2 rounded-md outline-none text-sm">
                                <option value="">Select status</option>
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Qualified">Qualified</option>
                                <option value="Converted">Converted</option>
                                <option value="Lost">Lost</option>
                            </select>
                            <Button title="Add Lead" onClick={() => { setIsModalOpen(true);setDeletingLead(null); setEditingLead(null);}} />

                        </div>
                    </div>
                    <div>
                        <LeadsTable lead={paginatedData} setSelectedLead={setSelectedLead} />
                        <Pagination value={{ currentPage, totalPages, prevPage, nextPage }} />
                    </div>
                </div>

                <LeadsDetails selectedLead={selectedLead} closeDetailsPanel={() => setSelectedLead(null)} handleLeadDelete={handleLeadDelete} handelLeadEdit={handleLeadEdit} />

            </div>
            <div>

                <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
                    {
                        deletingLead ? <ConfirmDelete handleDeletingCancel={()=>{setDeletingLead(null); setIsModalOpen(false)}} handleDeletingConfirm={handleDeletingConfirm} deletingLead={deletingLead}/> : <LeadsForm editingLead={editingLead} onFormSubmit = {editingLead? handleUpdateLead:handleAddLead}/>

                    }

                </Modal>


            </div>
        </div>
    )
}