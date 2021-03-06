import React from 'react';
import './AuthorsandAwards.css';

function AuthorsandAwards({ authorsAwards }) {

  const obj = {};

  authorsAwards.map(item => {
    if (obj[item.name]){
      obj[item.name]++
    } else {
      obj[item.name] = 1
    }
  })

  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => b - a).slice(0, 10)
  );

  const result = Object.entries(sorted).map(([key], index) => {
    return (
      <div key={key}>{index + 1}: {key}</div>
    )
  })

  return (
    <div className="authors-awards">
      <h1>Authors with the most awards</h1>
      <div>{result} </div>
    </div>
  );
}

export default AuthorsandAwards;

