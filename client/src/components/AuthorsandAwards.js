import React from 'react';

function AuthorsandAwards({ authorsAwards }) {

  const obj = {};

  authorsAwards.map(item => {
    if (obj[item.name]){
      obj[item.name]++
    } else {
      obj[item.name] = 1
    }
  })

  console.log(obj)

  const result = Object.entries(obj).map(([key, value]) => {
    return (
      (value >= 2
        ? <div>{key} has {value} awards</div>
        : <div>{key} has {value} award</div>
      )
    )
  })

  return (
    <div className="App">
      <h1>Authors with the most awards</h1>
      <div>{result} </div>
    </div>
  );
}

export default AuthorsandAwards;

