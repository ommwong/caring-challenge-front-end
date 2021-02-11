import React, {useState, useEffect} from 'react';
import { getAuthorsAwards, getBooksAwards, getAwards } from './ApiService';
import AuthorsandAwards from './components/AuthorsandAwards';
import BooksandAwards from './components/BooksandAwards';
import Awards from './components/Awards';

function App() {

  const [authorsAwards, setAuthorsAwards] = useState([]);
  const [booksAwards, setBooksAwards] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect (() => {
    getAuthorsAwards()
      .then(authorsAwards => setAuthorsAwards(authorsAwards.result))

    getBooksAwards()
      .then(booksAwards => setBooksAwards(booksAwards.result))

    getAwards()
      .then(awards => setAwards(awards.awards))
  }, [])


  return (
    <div className="App">
      <AuthorsandAwards authorsAwards={authorsAwards}/>
      <BooksandAwards booksAwards={booksAwards}/>
      <Awards awards={awards}/>
    </div>
  );
}

export default App;

