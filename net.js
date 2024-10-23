let books = [];
let editIndex = -1;

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (editIndex > -1) {
        books[editIndex] = { title, author };
        editIndex = -1; // Reset edit index
    } else {
        books.push({ title, author });
    }

    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';

    renderBooks();
}

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = $; { book.title } - $; { book.author };

        const editButton = document.createElement('button');
        editButton.textContent = 'تعديل';
        editButton.onclick = () => editBook(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'حذف';
        deleteButton.onclick = () => deleteBook(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        bookList.appendChild(li);
    });
}

function editBook(index) {
    document.getElementById('bookTitle').value = books[index].title;
    document.getElementById('bookAuthor').value = books[index].author;
    editIndex = index;
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}