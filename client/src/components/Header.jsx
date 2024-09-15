import toast from "react-hot-toast";

export default function Header({ searchQuery, setSearchQuery, setActiveComponent }) {
  function handleSearch() {
    if (searchQuery.length < 3) {
      toast("Enter atleast 3 characters to search");
      return;
    }

    setActiveComponent("searchResults");
  }

  return (
    <div className="w-full bg-gray-900 py-10 md:px-10 px-8 lg:px-20 z-10">
      <div className="flex gap-4 md:justify-between items-center flex-col md:flex-row">
        <div className="text-3xl font-bold text-white">ACONEWS</div>
        <div className="w-full  md:w-[50%] flex justify-center">
          <input onKeyDown={(e) => e.key === "Enter" && handleSearch()} placeholder="Search" type="text" name="" id="" className=" w-full md:w-[80%] px-3 py-[0.5rem]" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="bg-red-800 px-3 py-[0.5rem] text-white font-bold" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
