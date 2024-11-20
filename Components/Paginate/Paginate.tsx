import React from 'react'
import { PaginateProps } from '../Config/interface';

const Paginate: React.FC<PaginateProps> =({
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    }) => {

  return (
    <div className="pagination-controls flex justify-between items-center mt-4">
    <button
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <span className="text-gray-700">
      Página {currentPage} de {totalPages}
    </span>
    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      Siguiente
    </button>
  </div>
  )
}

export default Paginate