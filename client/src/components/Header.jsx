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
    <div className="w-full bg-gray-900 py-10 px-20 z-10">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">ACONEWS</div>
        <div className="w-[50%]">
          <input onKeyDown={(e) => e.key === "Enter" && handleSearch()} placeholder="Search" type="text" name="" id="" className="w-[80%] px-3 py-[0.5rem]" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="bg-red-800 px-3 py-[0.5rem] text-white font-bold" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
