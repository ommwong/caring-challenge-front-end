import React from 'react';
import Pagination from './Pagination';

function BooksandAwards({ booksAwards, currentPage, resultsPerPage, totalResults, paginate }) {

  const obj = {};

  booksAwards.map(item => {
    if (obj[item.title]){
      obj[item.title]++;
    } else {
      obj[item.title] = 1;
    }
  })

  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => b - a).slice(0, 50)
  );

  const result = Object.keys(sorted);

  const indexLastResult = currentPage * resultsPerPage;
  const indexFirstResult = indexLastResult - resultsPerPage;
  const currentResults = result.slice(indexFirstResult, indexLastResult)

  return (
    <div>
      <h1>Books with the most awards</h1>
      <ul>
        {currentResults.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </ul>

      <Pagination resultsPerPage={resultsPerPage} totalResults={booksAwards.length} paginate={paginate}/>
    </div>
  )
}

export default BooksandAwards;

