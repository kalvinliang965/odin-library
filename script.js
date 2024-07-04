const myLibrary = [];

const showButton = document.getElementById("showDialog");
const dialog = document.querySelector("dialog");
const confirmBtn = dialog.querySelector("#confirmBtn");
const selectEl = dialog.querySelector("select");
const bookName = document.querySelector("#book-name");
const authorName = document.querySelector("#author-name");
const numPages = document.querySelector("#numPages");
const myForm = document.querySelector("form");
const cancelBtn = document.getElementById("cancelBtn");
const container = document.querySelector(".container");

showButton.addEventListener("click", ()=>{
    dialog.showModal();
});


cancelBtn.addEventListener("click",()=>{
    myForm.reset();
});

confirmBtn.addEventListener("click", (event) => {
    if (validate()) {
        event.preventDefault();
        read =
            selectEl.value === "true"
                ? true
                : false;
        new_book = new Book(bookName.value, authorName.value,
                    numPages.value, read)
        appendBook(myLibrary, new_book);
        myForm.reset();
        dialog.close();
    }
});

function validate() {
    return bookName.validity.valid && 
            authorName.validity.valid && 
            numPages.validity.valid &&
            selectEl.validity.valid;
}

function Book(bookName, author, numPages, read) {
    // the constructor...
    this.bookName = bookName;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function appendBook(book_list, new_book) {
    book_list.unshift(new_book);
    new_card = construct_card(new_book);
    
}





/* <div class="card">
            <img src="./icons/book.svg" alt="book icon" class="book-icon">

            <div class="card-text">
                <p>The Great Gatsby</p>
                <p>F. Scott Fitzgerald</p>
                <p>80</p>
            </div>

            <div class="card-last-item">
                <div class="book-status">
                    Read
                </div>

                <button class="delete-button">
                    <img src="./icons/delete-circle-outline.svg" alt="delete icon">
                </button>
            </div>
        </div> */
function construct_card(new_book) {
    const div = document.createElement("div");
    div.classList.add("card");

    // create the svg img
    const img = document.createElement("img");
    if (new_book.read) {
        img.src="./icons/book.svg";
    } else {
        img.src = "./icons/book-open-variant.svg";
    }
    img.alt="book icon";
    img.classList.add("book-icon");

    // inner div
    const inner_div = document.createElement("div");
    inner_div.classList.add("card-text")
    p1 = document.createElement("p");
    p1.textContent = new_book.bookName.toString();
    p2 = document.createElement("p");
    p2.textContent = new_book.author.toString();
    p3 = document.createElement("p");
    p3.textContent = parseInt(new_book.numPages);

    inner_div.appendChild(p1);
    inner_div.appendChild(p2);
    inner_div.appendChild(p3);

    // create card-last-item

    const card_last_item = document.createElement("div");
    card_last_item.classList.add("card-last-item");

    const book_status = document.createElement("div");
    book_status.classList.add("book-status");
    book_status.textContent = 
        (read)
        ?   "Read"
        : "Unread";
    
    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete-button");
    const delete_img = document.createElement("img");
    delete_img.src="./icons/delete-circle-outline.svg";
    delete_img.alt="delete icon";

    delete_btn.appendChild(delete_img);

    card_last_item.appendChild(book_status);
    card_last_item.appendChild(delete_btn);

    // create book status
    div.appendChild(img);
    div.appendChild(inner_div);
    div.appendChild(card_last_item);
    container.insertBefore(div, container.firstChild);
}

function addBookToLibrary() {
    // do stuff here
}