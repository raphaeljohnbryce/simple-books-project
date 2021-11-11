let booksList = []
let bookIdCounter = 0

let nameElement = document.getElementById("book-name-input")
let authorElement = document.getElementById("book-author-input")
let priceElement = document.getElementById("book-price-input")

let booksContainerElement = document.getElementById("books-container")

const addNewBook = () => {
    if (nameElement.value === '' || authorElement.value === '') {
        alert("Name or Author input is empty! Please try again...")
        return
    }

    let newBook = {
        id: bookIdCounter++,
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }

    // update list
    booksList.push(newBook)

    // update list in html
    loadBooks()

    // clear input
    nameElement.value = ''
    authorElement.value = ''
    priceElement.value = ''
}

// create table and rows by booksList variable
const loadBooks = () => {
    let table = `<table id="books-table">
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th style="color: red;">Delete</th>
                    </tr>`

    for (let book of booksList) {
        table += `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                    <td>
                        <button onclick="handleDeleteBookById(${book.id})">Dlt</button>
                    </td>
                 </tr>`
    }

    table += `</table>`

    booksContainerElement.innerHTML = table
}

const handleDeleteBookById = (id) => {
    let filteredBooksList = booksList.filter(el => el.id !== id)

    booksList = filteredBooksList

    loadBooks()
}