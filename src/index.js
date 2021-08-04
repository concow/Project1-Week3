const bookCreateForm = document.getElementById("book-form");
const bookContainer = document.getElementById("book-container");        ///omfg!!!!!

    fetch('http://localhost:3000/books')
        .then((res) => res.json())
        //.then((bookData) => bookData.forEach((book) => renderBooks(book)));
        //.then((bookData) => renderBooks(bookData));
        //.then((bookData) => console.log(bookData));
        //.then(bookData => {bookData.forEach(renderBooks);});
        //.then(bookData =>{})

 function renderBooks(book) {
    
    //Creating an HTML Book Card to display our Books
    const bookCard = document.createElement("div");
    bookCard.id = `book-${book.id}`;
    bookCard.className = "book-card";

    //Creating HTML elements an assigning variables to our API Properties
    //id, title, author, genre, image & price
    const bookTitle = document.createElement("h2");
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerText = book.author;
 
    const bookGenre = document.createElement("h4")
    bookGenre.innerText = book.genre

    const bookCover = document.createElement("img");
    bookCover.src = book.image;
    bookCover.alt = `${book.title} image`;
    
    const bookLikes = document.createElement("h4");
    bookLikes.innerText = "Likes: ";

    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    likeButton.innerText = "♥";
    likeButton.addEventListener("click", increaseLike);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    //bookCard.append(bookTitle, bookAuthor, bookGenre, bookCover)
    bookCard.append(bookTitle, bookAuthor, bookGenre, bookCover, bookLikes, likeButton, deleteButton);
    bookContainer.appendChild(bookCard);
}

// function getBooks() {
//     fetch('http://localhost:3000/books')
//         .then((res) => res.json())
//         .then((bookData) => bookData.forEach((book) => renderBooks(book)));
//         //.then((bookData) => renderBooks(bookData));
//         //.then((bookData) => console.log(bookData));
//         //.then(bookData => {bookData.forEach(renderBooks);});
// }

// function init() {
//     getBooks();
// }

// init();

