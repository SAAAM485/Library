const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    //add books to array
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function loopBooksOfLibrary() {
    //loop books in array
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.remove();
    });
    myLibrary.forEach((book, index) => {
        createCard(book, index);
    });
}

function createCard(book, index) {
    //create cards on display
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.object = book;
    
    let bookTitle = document.createElement("div");
    bookTitle.innerHTML = "Title - " + book.title;
    card.appendChild(bookTitle);
    
    let bookAuthor = document.createElement("div");
    bookAuthor.innerHTML = "Auther - " + book.author;
    card.appendChild(bookAuthor);
    
    let bookPages = document.createElement("div");
    bookPages.innerHTML = "Pages - " + book.pages;
    card.appendChild(bookPages);
    
    let readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.name = "read";
    readCheckbox.value = "value";
    readCheckbox.id = "read";
    if (book.read === true) {
        readCheckbox.checked = true;
    }

    let label = document.createElement("label");
    label.htmlFor = "read";
    label.appendChild(document.createTextNode("I have read this book."));
    let checkboxContainer = document.createElement("div");
    checkboxContainer.appendChild(readCheckbox);
    checkboxContainer.appendChild(label);
    card.appendChild(checkboxContainer);

    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.setAttribute("id", index);
    card.appendChild(remove);

    const container = document.querySelector(".container");
    container.appendChild(card);

    let removeBtn = remove
    removeCardListener(removeBtn, index);
    readStatus(readCheckbox, index);
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

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    if (title == null || title == "" 
        || author == null || author == "" 
        || pages == null || pages == "") {
        alert("Fields must be filled out");
        return false;
    }

    dialog.close();
    addBookToLibrary(title, author, pages, read);
    loopBooksOfLibrary();
});

const removeBtns = document.querySelectorAll(".remove_btn");
removeBtns.forEach(removeBtn => {
    console.log("click");
    removeBtn.addEventListener("click", () => {
        let cardIndex = removeBtn.id;
        myLibrary.splice(cardIndex, 1)
        let cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.remove();
        });
        loopBooksOfLibrary();
    });
});

function removeCardListener(removeBtn, index) {
    removeBtn.addEventListener("click", () => {

        myLibrary.splice(index, 1)
        let cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.remove();
        });
        loopBooksOfLibrary();
    });
}

function readStatus(checkbox, index) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            myLibrary[index].read = true
        } else {
            myLibrary[index].read = false
        }
    });
    console.log(myLibrary[index]);
}

