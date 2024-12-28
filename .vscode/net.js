const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

let books = [];

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    const book = {
        name: bookName,
        author: author,
        price: price,
        description: description,
        image: URL.createObjectURL(image)
    };

    books.push(book);
    displayBooks();
    bookForm.reset();
});

function displayBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {

        bookList.appendChild(bookToElement(book, index));

    });
}

function editBook(index) {
    const book = books[index];

    document.getElementById('bookName').value = book.name;
    document.getElementById('author').value = book.author;
    document.getElementById('price').value = book.price;
    document.getElementById('description').value = book.description;

    // حذف الكتاب القديم
    deleteBook(index);
}

function deleteBook(index) {
    books.splice(index, 1);
    console.log(books);
    displayBooks();
}

function bookToElement(book, index) {
    let info = document.createElement("div");
    let image = document.createElement("div");
    let buttons = document.createElement("div");
    info.classList.add("entryinfo");
    image.classList.add("entryimage");
    buttons.classList.add("entrybutton");
    let li = document.createElement('li');
    li.classList.add("bookentry");

    info.innerHTML = `<strong> ${book.name} </strong><br><br>
    مؤلف: ${book.author} <br><br>
        سعر: ${book.price}
    دينار <br><br>
        وصف: ${book.description}`;
    image.innerHTML = `<img src = "${book.image}"
        alt = "${book.name}"
        style = "width:100px;height:auto;">`;
    buttons.innerHTML = `<button onclick = "editBook(${index})"> تعديل </button>  
            <button onclick = "deleteBook(${index})"> حذف </button>`;
    li.appendChild(info);
    li.appendChild(image);
    li.appendChild(buttons);
    return li;

}