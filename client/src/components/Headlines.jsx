import React, { useEffect, useState } from "react";
import axios from "axios";
import TopHeadlines from "./TopHeadlines";
import OtherHeadlines from "./OtherHeadlines";
import Pagination from "./Pagination";
import { toast } from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

export default function Headlines({ language, country, category }) {
  const [otherHeadlines, setOtherHeadlines] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [pageStates, setPageState] = useState("LOADING");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function getHeadlines({ page = 1 }) {
    try {
      setPageState("LOADING");
      const res = await axios.get(`https://acowale-news-app.onrender.com/get-headlines?category=${category?.toLowerCase()}&lang=${language}&country=${country}&page=${page}`);
      if (res.status === 200 && res.data.ok) {
        let headlines = res.data.data.articles;
        if (topHeadlines.length > 0 && page > 1) {
          setOtherHeadlines(headlines);
        } else {
          setTopHeadlines(headlines.slice(0, 3));
          setOtherHeadlines(headlines.slice(3));
        }
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

  useEffect(() => {
    setCurrentPage(1);
    getHeadlines({ page: 1 });
  }, [category, language, country]);

  return (
    <div className="px-20 z-10">
      {pageStates === "LOADING" && (
        <div className="my-20">
          <LoadingSpinner />
        </div>
      )}
      {pageStates === "ERROR" && <div className="font-bold text-2xl my-20 text-center">Error fetching data! Please try again later</div>}
      {pageStates === "DONE" && (
        <div className="flex flex-col gap-8 items-center mb-8">
          {topHeadlines.length === 3 && <TopHeadlines topHeadlines={topHeadlines} />}
          {otherHeadlines.length > 0 && <OtherHeadlines otherHeadlines={otherHeadlines} />}
          {totalPages > 0 ? <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} onPageChange={getHeadlines} /> : <div className="mt-10 text-xl font-bold">No Headlines available!</div>}
        </div>
      )}
    </div>
  );
}
