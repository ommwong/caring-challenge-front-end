import React, {useState, useEffect} from 'react';
import { getAuthorsAwards, getBooksAwards, getAwards } from './ApiService';

function App() {

  const [authorsAwards, setAuthorsAwards] = useState([]);
  const [booksAwards, setBooksAwards] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect (() => {
    getAuthorsAwards()
      .then(authorsAwards => setAuthorsAwards({result: authorsAwards}))

    getBooksAwards()
      .then(booksAwards => setBooksAwards({result: booksAwards}))

    getAwards()
      .then(awards => setAwards({awards: awards}))
  }, [])

  console.log(authorsAwards)
  console.log('books awards:', booksAwards)
  console.log('awards:', awards)


  return (
    <div className="App">
      <h1>Hello from client</h1>
    </div>
  );
}

export default App;

