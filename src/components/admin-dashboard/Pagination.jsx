import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        className="pagination-button bg-slate-300 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-l"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Previous
      </button>
      <span className="pagination-info bg-gray-200 text-gray-700 py-2 px-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-r cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </button>
      
    </div>
  );
}
