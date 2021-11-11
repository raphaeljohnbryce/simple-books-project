let booksList = []

let nameElement = document.getElementById("book-name-input")
let authorElement = document.getElementById("book-author-input")
let priceElement = document.getElementById("book-price-input")

let booksContainerElement = document.getElementById("books-container")

const addNewBook = () => {
    let newBook = {
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }

    booksList.push(newBook)

    loadBooks()
}

const loadBooks = () => {
    let table = `<table id="books-table">
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>`

    for(let book of booksList){
        table += `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                 </tr>`
    }    
    
    table += `</table>`

    booksContainerElement.innerHTML = table
}