export default function SearchInput({search, setSearch}){
    return(
        <div>
            <input type="text" placeholder="Search leads..." className="border w-74 px-4 py-2 rounded-md text-sm outline-none" value={search} onChange={setSearch} />
        </div>
    )
}