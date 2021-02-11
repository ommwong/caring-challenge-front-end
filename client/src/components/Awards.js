import React from 'react';
import './Awards.css';

function Awards ({ awards }) {

  const obj = {};

  awards.map(item => {
    if (obj[item.award]){
      obj[item.award]++
    } else {
      obj[item.award] = 1
    }
  })

  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => b - a).slice(0, 5)
  );

  const result = Object.entries(sorted).map(([key], index) => {
    return (
      <div key={key}>{index + 1}: {key}</div>
    )
  })

  return (
    <div className="awards">
      <h1>Most Frequent Awards</h1>
      <div>{result}</div>
    </div>
  );
}

export default Awards;

