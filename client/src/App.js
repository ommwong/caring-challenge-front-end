import React, {useState, useEffect} from 'react';
import { getAuthorsAwards, getBooksAwards, getAwards } from './ApiService';
import AuthorsandAwards from './components/AuthorsandAwards';
import BooksandAwards from './components/BooksandAwards';
import Awards from './components/Awards';
import Pagination from './components/Pagination'

function App() {

  const [authorsAwards, setAuthorsAwards] = useState([]);
  const [booksAwards, setBooksAwards] = useState([]);
  const [awards, setAwards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(2);

  useEffect (() => {
    getAuthorsAwards()
      .then(authorsAwards => setAuthorsAwards(authorsAwards.result))

    getBooksAwards()
      .then(booksAwards => setBooksAwards(booksAwards.result))

    getAwards()
      .then(awards => setAwards(awards.awards))
  }, [])

  const obj = {};

  booksAwards.map(item => {
    if (obj[item.title]){
      obj[item.title]++;
    } else {
      obj[item.title] = 1;
    }
  })

  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([,a],[,b]) => b - a)
  );

  const result = Object.keys(sorted);

  const indexLastResult = currentPage * resultsPerPage;
  const indexFirstResult = indexLastResult - resultsPerPage;
  const currentResults = result.slice(indexFirstResult, indexLastResult)

  console.log(currentResults)

  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="App">
      {/* <AuthorsandAwards authorsAwards={authorsAwards}/> */}
      <BooksandAwards currentResults={currentResults} />
      <Pagination resultsPerPage={resultsPerPage} totalResults={booksAwards.length} paginate={paginate}/>
      {/* <Awards awards={awards}/> */}
    </div>
  );
}

export default App;

