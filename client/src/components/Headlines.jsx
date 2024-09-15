import React, { useState } from "react";
import axios from "axios";
import TopHeadlines from "./TopHeadlines";
import OtherHeadlines from "./OtherHeadlines";
import Pagination from "./Pagination";
import { toast } from "react-hot-toast";

export default function Headlines({ language, country, category }) {
  const [otherHeadlines, setOtherHeadlines] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  async function getHeadlines() {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:5001/get-headlines?category=${category}&lang=${language}&country=${country}`);
      if (res.status === 200 && res.data.ok) {
        let headlines = res.data.data.data.articles;
        setTopHeadlines(headlines.slice(0, 3));
        setOtherHeadlines(headlines.slice(3));
        // setTotalPages(res.data.data.data.totalPages);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  useState(() => {
    getHeadlines();
  }, [currentPage]);

  return (
    <div className="px-20 z-10">
      {isLoading ? (
        <></>
      ) : (
        <div className="flex flex-col gap-8 items-center mb-8">
          <TopHeadlines topHeadlines={topHeadlines} />
          <OtherHeadlines otherHeadlines={otherHeadlines} />
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </div>
  );
}
