let container = document.getElementById("booksElement")

const getBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json()
    })
    .then((listOfBooks) => {
      console.log(listOfBooks)
      listOfBooks.forEach(visualiseBook)
    })
}

getBooks()

function visualiseBook(book) {
  console.log(book)
  let card = document.createElement("div")
  card.classList.add("card", "col-3", "mb-3", "p-2")
  card.innerHTML = `<img src=${book.img} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${book.title}</h5>
     <p class="card-text">Category: ${book.category}</p>
     <a href="#" class="btn btn-primary mb-2">Buy this for £${book.price}</a>
     <p class="card-text "> ID:${book.asin}</p>
    </div>
`
  container.appendChild(card)
}
