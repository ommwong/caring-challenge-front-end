import React from 'react';

function BooksandAwards({ booksAwards }) {

  const obj = {};

  booksAwards.map(item => {
    if (obj[item.title]){
      obj[item.title]++
    } else {
      obj[item.title] = 1
    }
  })

  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => b - a)
  );

  const result = Object.entries(sorted).map(([key, value], index) => {
    return (
      <div key={key}>{index + 1}: {key}</div>
    )
  })

  return (
    <div className="App">
      <h1>Books with the most awards</h1>
      <div>{result}</div>
    </div>
  );
}

export default BooksandAwards;

