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
  //   console.log(book)
  let card = document.createElement("div")
  card.classList.add("card", "col-3", "mb-3", "p-2")
  card.innerHTML = `<img src=${book.img} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${book.title}</h5>
     <p class="card-text">Category: ${book.category}</p>
     <div class="flex">
     <button class="btn btn-primary mb-2 cart-btn" onclick="addToCart()">Add To Cart</button>
     <span>Price: £${book.price}</span>
     </div>
     <p class="card-text "> ID:${book.asin}</p>
     <button class="btn btn-dark mb-2 skip-btn" onclick="hideBook()">Skip</button>
    </div>
`
  container.appendChild(card)
}

let bookToCartBtn = document.querySelectorAll(".cart-btn")
let cartElement = parseInt(document.getElementById("cartItems").value)
let cartArray = []

function addToCart() {
  let btn = event.target

  //   let title = btn.closest(".card-title")
  //   title.classList.add("red-border")
  let bookCard = btn.parentElement.parentElement.parentElement
  bookCard.classList.add("red-border")
  let title = bookCard.querySelector(".card-title").innerHTML
  console.log(title)
  alert(title + " - Added to Cart. ")
  cartArray.push(title)

  cartElement = cartArray.length
  document.getElementById("cartItems").value = cartElement
  //   console.log("clicked")
}

function hideBook() {
  let btn = event.target
  let card = btn.parentElement.parentElement
  container.removeChild(card)
}

// let bookToCartBtn = document.querySelector(
//   "#booksElement > div:nth-child(1) > div > div > button"
// )
// bookToCartBtn.addEventListener("click", addToCart)
