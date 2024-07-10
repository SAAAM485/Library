const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    //add books to array
}

function loopBooksOfLibrary() {
    //loop books in array
    let cards = document.querySelectorAll(".card")
    cards.remove();
    myLibrary.forEach(book => {
        createCard();
    });
}

function createCard(title, author, pages, read) {
    //create cards on display
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    
    let bookTitle = document.createElement("div");
    
    let titleContent = document.createTextNode(title);
    bookTitle.appendChild(titleContent);
    card.appendChild(bookTitle);
    
    let bookAuthor = document.createElement("div");
    bookAuthor.innerHTML = author;
    card.appendChild(bookAuthor);
    
    let bookPages = document.createElement("div");
    bookPages.innerHTML = pages;
    card.appendChild(bookPages);
    
    let readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.name = "read";
    readCheckbox.value = "value";
    readCheckbox.id = "read";
    if (read === true) {
        readCheckbox.checked = true;
    }

    let label = document.createElement("label");
    label.htmlFor = "read";
    label.appendChild(document.createTextNode("I have read this book."));

    card.appendChild(checkbox);
    card.appendChild(label);

    const container = document.querySelector(".container");
    container.appendChild(card);
}

const addBook = document.querySelector("#add_book");
const dialog = document.querySelector("dialog");
const cancelBtn = document.querySelector("#cancel_btn");
const addBtn = document.querySelector("#add_btn");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});