// const bsTitle = document.getElementById("bs-title");
// const bsImage = document.getElementById("bs-image");
// const bsAuthor = document.getElementById("bs-author");
// const bsLikes = document.getElementById("bs-likes");
// const bsLikeButton = document.getElementById("bs-like-button");
// const bsComments = document.getElementById("bs-comments");
// const bsCommentForm = document.getElementById("bs-comment-form");
const bookCreateForm = document.getElementById("book-form");
const bookContainer = document.getElementById("poke-container");


fetch('http://localhost:3000/books')
    .then((res) => res.json())
    .then((bookData) => bookData.forEach((book) => renderBooks(book)))
    //.then((bookData) => renderBooks(bookData));
    //.then((bookData) => console.log(bookData))

 function renderBooks(book) {
    
    //Creating an HTML Book Card to display our Books
    const bookCard = document.createElement("div");
    bookCard.id = `book-${book.id}`;
    bookCard.className = "book-card";

    //Creating HTML elements an assigning variables to our API Properties
    //id, title, author, genre, image & price
    const bookTitle = document.createElement("h2");
    bookTitle.innerText = book.title;
    //console.log(book.title)
 
    const bookCover = document.createElement("img");
    bookCover.src = book.image;
    bookCover.alt = `${book.title} image`;
    
    //console.log(book.alt)

    const bookLikes = document.createElement("h3");
    bookLikes.innerText = "Likes: ";

    const likesNumber = document.createElement("h5");
    likesNumber.className = "like-num";
    likesNumber.innerText = book.likes;

    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    likeButton.innerText = "♥";
    //likeButton.addEventListener("click", increaseLike);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";

    console.log(bookCard)

    bookCard.append(bookTitle, bookCover, bookLikes, likesNumber, likeButton, deleteButton);
    bookContainer.appendChild(bookCard);
}

function init() {
    getBooks()
}

init()

