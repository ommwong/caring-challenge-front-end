import React, {useState, useEffect} from 'react';
import { getAuthorsAwards, getBooksAwards, getAwards } from './ApiService';
import AuthorsandAwards from './components/AuthorsandAwards';

function App() {

  const [authorsAwards, setAuthorsAwards] = useState([]);
  const [booksAwards, setBooksAwards] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect (() => {
    getAuthorsAwards()
      .then(authorsAwards => authorsAwards.result
        .sort((a, b) => a.name < b.name ? -1 : 1)
        .slice(0, 5))
      .then(authorsAwards => setAuthorsAwards(authorsAwards))

    getBooksAwards()
      .then(booksAwards => setBooksAwards(booksAwards.result))

    getAwards()
      .then(awards => setAwards(awards.result))
  }, [])

  console.log(authorsAwards)
  // console.log(booksAwards)


  return (
    <div className="App">
      <AuthorsandAwards authorsAwards={authorsAwards}/>
    </div>
  );
}

export default App;

