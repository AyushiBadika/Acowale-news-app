export default function Header({ searchQuery, setSearchQuery }) {
  function handleSearch() {}

  return (
    <div className="w-full bg-gray-900 py-10 px-20">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">ACONEWS</div>
        <div className="w-[50%]">
          <input placeholder="Search" type="text" name="" id="" className="w-[80%] px-3 py-[0.5rem]" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="bg-red-800 px-3 py-[0.5rem] text-white font-bold" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
