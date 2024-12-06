let editingIndex = -1;
const bookList = [];

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookImage = document.getElementById('bookImage').files[0];
    const bookPrice = document.getElementById('bookPrice').value;

    if (editingIndex === -1) {
        // إضافة كتاب جديد
        const book = { name: bookName, author: authorName, price: bookPrice };
        bookList.push(book);
    } else {
        // تعديل الكتاب
        bookList[editingIndex] = { name: bookName, author: authorName, price: bookPrice };
        editingIndex = -1; // إعادة تعيين الفهرس
    }

    renderBookList();
    document.getElementById('bookForm').reset();
});

function renderBookList() {
    const bookListElement = document.getElementById('bookList');
    bookListElement.innerHTML = '';

    bookList.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `
            <strong>${book.name}</strong> - ${book.author} - ${book.price} دينار
            <button class="edit-button" onclick="editBook(${index})">تعديل</button>
            <button class="delete-button" onclick="deleteBook(${index})">حذف</button>
        `;
        bookListElement.appendChild(bookItem);
    });
}

function editBook(index) {
    const book = bookList[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.author;
    document.getElementById('bookPrice').value = book.price;
    editingIndex = index;
}

function deleteBook(index) {
    bookList.splice(index, 1);
    renderBookList();
}