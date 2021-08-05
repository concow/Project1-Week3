const bookForm = document.getElementById("book-form");
const bookContainer = document.getElementById("book-container");

 function renderBooks(book) {
    
    //Creating an HTML Book Card to display our Books
    const bookCard = document.createElement("div");
    bookCard.id = `book-${book.id}`;
    bookCard.className = "book-card";

    //Creating HTML elements an assigning variables to our API Properties
    //id, title, author, genre, image & price
    const bookTitle = document.createElement("h4");
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement("h6");
    bookAuthor.innerText = book.author;
 
    const bookGenre = document.createElement("h6");
    bookGenre.innerText = book.genre

    const bookPrice = document.createElement("h6");
    bookPrice.innerText = `$${book.price}`;

    const bookCover = document.createElement("img");
    bookCover.src = book.image;
    bookCover.alt = `${book.title} image`;
    
    //Instantiating likes, delete for user events
    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    likeButton.innerText = "♥";
    likeButton.addEventListener("click", increaseLike);
    
    const bookLikes = document.createElement("h5");
    bookLikes.innerText = "Likes: ";

    const likesNumber = document.createElement("h5");
    likesNumber.className = "like-num";
    likesNumber.textContent = book.likes;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    
    bookCard.append(bookCover, bookTitle, bookAuthor, bookGenre, bookPrice, bookLikes, likesNumber, likeButton, deleteButton);
    bookContainer.appendChild(bookCard);
}

function increaseLike(event) {
    const likesElement = event.target.previousElementSibling;
    console.log(likesElement)
    likesElement.innerText = parseInt(likesElement.innerText) + 1;
}

function addBook(event) {
    event.preventDefault();
    const bookForm = event.target;
    const bookTitle = bookForm.querySelector("#title-input").value;
    const bookAuthor = bookForm.querySelector("#author-input").value;
    const bookGenre = bookForm.querySelector("#genre-input").value;
    const bookPrice = bookForm.querySelector("#price-input").value;
    const bookImage = bookForm.querySelector("#image-input").value;

    if (bookTitle !== "" && bookAuthor !== "" && bookGenre !=="" && bookPrice !== "" 
            && bookImage !== "") {
        const book = {
            title: bookTitle,
            author: bookAuthor,
            genre: bookGenre,
            price: bookPrice,
            image: bookImage,
            //likes: 0,
        };

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }

        fetch('http://localhost:3000/pokemons', configObj)
            .then(resp => resp.json())
            // .then(pokemon => renderPoke(pokemon))
            .then(renderBooks)
        bookForm.reset(); //clearing the form
    } else {
        alert("Form Empty");
    }
}
function getBooks() {
    fetch('http://localhost:3000/books')
        .then((res) => res.json())
        .then((bookData) => bookData.forEach((book) => renderBooks(book)));
        //.then((bookData) => renderBooks(bookData));
}

function init() {
    getBooks();
    bookForm.addEventListener("submit", addBook);
}

init();

