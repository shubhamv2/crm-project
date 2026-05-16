import { useMemo, useState } from "react"
export default function usePagination(data, itemsPerPage){
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data?.length/itemsPerPage);
    const paginatedData = useMemo(()=>{
        const start = (currentPage - 1) * itemsPerPage;
        return data?.slice(start, start+itemsPerPage);
    },[currentPage, data, itemsPerPage]);

    const nextPage = () =>{
        setCurrentPage(prev=>Math.min(prev+1, totalPages))
    }

    const prevPage = () =>{
        setCurrentPage(prev=>Math.max(prev-1, 1));
    }

    return {currentPage, totalPages, paginatedData, nextPage, prevPage}
}

