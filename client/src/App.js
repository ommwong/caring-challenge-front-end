import React, {useState, useEffect} from 'react';
import { getAuthorsAwards, getBooksAwards, getAwards } from './ApiService';
import AuthorsandAwards from './components/AuthorsandAwards';
import BooksandAwards from './components/BooksandAwards';
import Awards from './components/Awards';

function App() {

  const [authorsAwards, setAuthorsAwards] = useState([]);
  const [booksAwards, setBooksAwards] = useState([]);
  const [awards, setAwards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);

  useEffect (() => {
    getAuthorsAwards()
      .then(authorsAwards => setAuthorsAwards(authorsAwards.result))

    getBooksAwards()
      .then(booksAwards => setBooksAwards(booksAwards.result))

    getAwards()
      .then(awards => setAwards(awards.awards))
  }, [])

  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="App">
      <AuthorsandAwards authorsAwards={authorsAwards}/>
      <BooksandAwards booksAwards={booksAwards} currentPage={currentPage} resultsPerPage={resultsPerPage} resultsPerPage={resultsPerPage} totalResults={booksAwards.length} paginate={paginate}/>
      <Awards awards={awards}/>
</div>
  );
}

export default App;



