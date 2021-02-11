import React from 'react';

function AuthorsandAwards({ authorsAwards }) {

  return (
    <div className="App">
      <h1>Authors with the most awards</h1>
      {authorsAwards.map((item) => (
        <div> {item.name} {item.award}</div>
      ))}
    </div>
  );
}

export default AuthorsandAwards;

