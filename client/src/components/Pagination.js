import React from 'react';

function Pagination({resultsPerPage, totalResults, paginate}) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults/resultsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      {pageNumbers.map(num => (
        <button key={num} onClick={() => paginate(num)}>
          {num}
        </button>
      ))}
    </div>
  )
}

export default Pagination;

