import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Pagination({ value }) {
    const { currentPage, totalPages, nextPage, prevPage } = value;
    return (
        <div className="flex items-center justify-between">

            <div>
                <p>Page {currentPage} of {totalPages}</p>
            </div>
            <div className="flex gap-10">
                <button className="p-2 bg-black text-white rounded-full cursor-pointer" onClick={prevPage}><ChevronLeft/></button>
                <button className="p-2 bg-black text-white rounded-full cursor-pointer" onClick={nextPage}><ChevronRight/></button>
            </div>
        </div>
    )
}