import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPages = () => {
    const pages = [];

    // Calculate the start and end page to ensure three pages are always shown
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    // Adjust the start and end if we are near the beginning or end
    if (currentPage === totalPages && totalPages > 2) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else if (currentPage === 1 && totalPages > 2) {
      endPage = Math.min(3, totalPages);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button key={i} onClick={() => goToPage(i)} className={`px-3 py-1 border rounded-md ${i === currentPage ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
        Previous
      </button>

      {renderPages()}

      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
