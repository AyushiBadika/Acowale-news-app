import { useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import NewsCard from "./NewsCard";

export default function SearchResults({ language, country, query, setActiveComponent }) {
  const [searchResults, setSearchResults] = useState([]);
  const [pageStates, setPageState] = useState("LOADING");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function searchNews({ page = 1 }) {
    try {
      setPageState("LOADING");
      const res = await axios.get(`https://acowale-news-app.onrender.com/search-news?query=${query}&lang=${language}&country=${country}&page=${page}`);
      if (res.status === 200 && res.data.ok) {
        setSearchResults(res.data.data.articles);
        setTotalPages(res.data.data.totalPages);
        setPageState("DONE");
      } else {
        setTotalPages(0);
        setPageState("ERROR");
      }
    } catch (error) {
      setPageState("ERROR");
      setTotalPages(0);
    }
  }

  useState(() => {
    searchNews({ page: 1 });
  }, []);

  let searchDebounce = null;

  useState(() => {
    console.log("inside");
    if (query.length > 3) {
      console.log("here");
      if (searchDebounce) {
        clearTimeout(searchDebounce);
      }
      searchDebounce = setTimeout(() => {
        searchNews({ page: 1 });
      }, 1000);
      console.log("there");
    }
  }, [query]);

  return (
    <div className="px-20 z-10 mt-10 w-full">
      {pageStates === "LOADING" ? (
        <div className="mb-10">
          <LoadingSpinner />
        </div>
      ) : (
        <button onClick={() => setActiveComponent("headlines")} className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-gray-800 text-xl font-bold">Back to Home</span>
        </button>
      )}

      {pageStates === "ERROR" && <div className="font-bold text-2xl mb-10 text-center">Error fetching data! Please try again later</div>}
      {pageStates === "DONE" && (
        <div className="flex flex-col gap-8 items-center mb-8">
          {searchResults.length > 0 ? (
            <>
              <h2 className="text-4xl text-center font-bold underline">Search Results</h2>
              <div className="grid grid-cols-3 gap-8">
                {searchResults?.map((article, index) => (
                  <NewsCard key={index} article={article} />
                ))}
              </div>
              <Pagination onPageChange={searchNews} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </>
          ) : (
            <div>No results found for given query!</div>
          )}
        </div>
      )}
    </div>
  );
}
