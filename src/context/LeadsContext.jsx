import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { leadsData } from "../data/leadsData";
import { STORAGE_KEYS } from "../constants/storagekeys";

const LeadsContext = createContext();

export const LeadsProvider = ({children}) =>{
    const [leads, setLeads] = useState(()=>{
        const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_KEY));
        return (leads) ?leads : leadsData;
    });

    const addLead = (formData)=>{
        const newLead = {
            id:crypto.randomUUID(),
            name:formData.name,
            email:formData.email,
            phone:formData.phone,
            status:"New",
            source:formData.source,
            assignedTo:"",
            createdAt: new Date().toISOString(),
            activities:[],
            notes:[],
        }

        setLeads(prev=>[newLead,...prev]);
    }
    const editLead = (updatedLead) =>{
        setLeads(prev=>prev.map(lead=>lead.id===updatedLead.id?updatedLead:lead));
    }
    
    const deleteLead = (leadId) =>{
        setLeads(prev=>prev.filter(lead=>lead.id !== leadId))
    }

    const value = useMemo(()=>{
       return {leads, addLead, deleteLead, editLead} 
    },[leads])

    useEffect(()=>{
        localStorage.setItem(STORAGE_KEYS.LEADS_KEY,JSON.stringify(leads));
    },[leads])

    return (
        <LeadsContext.Provider value={value} >{children}</LeadsContext.Provider>
    )
}

export const useLeadsContext = () =>{
    return useContext(LeadsContext);
}
