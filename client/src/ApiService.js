export function getAuthorsAwards () {
  const endpoint = 'http://localhost:4000/authors-awards'

  return fetch(endpoint)
    .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })

}

export function getBooksAwards () {
  const endpoint = 'http://localhost:4000/books-awards'

  return fetch(endpoint)
    .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
}

export function getAwards () {
  const endpoint = 'http://localhost:4000/awards'

  return fetch(endpoint)
    .then((res) => res.json())
    .catch(error => {
      console.log('Error:', error);
    })
}
