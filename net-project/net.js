const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');
const messageDiv = document.getElementById('message');

let editingIndex = -1;

bookForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const availableCopies = document.getElementById('availableCopies').value;

    if (editingIndex === -1) {
        // إضافة كتاب جديد
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${title}</strong> by ${author}<br>
            تاريخ النشر: ${publishedDate}<br>
            عدد النسخ المتاحة: ${availableCopies}
            <button class="edit" onclick="editBook(this)">تعديل</button>
            <button class="delete" onclick="deleteBook(this)">حذف</button>
        `;
        bookList.appendChild(li);
        messageDiv.textContent = "تم إضافة الكتاب بنجاح!";
    } else {
        // تعديل الكتاب الحالي
        const li = bookList.children[editingIndex];
        li.innerHTML = `
            <strong>${title}</strong> by ${author}<br>
            تاريخ النشر: ${publishedDate}<br>
            عدد النسخ المتاحة: ${availableCopies}
            <button class="edit" onclick="editBook(this)">تعديل</button>
            <button class="delete" onclick="deleteBook(this)">حذف</button> ;
        editingIndex = -1`; // إعادة تعيين الفهرس
        messageDiv.textContent = "تم تعديل الكتاب بنجاح!";
    }

    bookForm.reset();
});

function editBook(button) {
    const li = button.parentNode;
    const title = li.querySelector('strong').innerText;
    const author = li.childNodes[1].nodeValue.split(' by ')[1].trim();

    const publishedDate = li.childNodes[3].nodeValue.split(': ')[1].trim();
    const availableCopies = li.childNodes[5].nodeValue.split(': ')[1].trim();

    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('publishedDate').value = publishedDate;
    document.getElementById('availableCopies').value = availableCopies;

    editingIndex = Array.from(bookList.children).indexOf(li); // حفظ الفهرس
}

function deleteBook(button) {
    const li = button.parentNode;
    bookList.removeChild(li);
    messageDiv.textContent = "تم حذف الكتاب بنجاح!";
}