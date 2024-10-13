document.getElementById('bookForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const availableCopies = document.getElementById('availableCopies').value;

    const response = await fetch('/add-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, publishedDate, availableCopies })
    });

    const messageDiv = document.getElementById('message');

    if (response.ok) {
        messageDiv.textContent = 'تم إضافة الكتاب بنجاح!';
        messageDiv.style.color = 'green';
        document.getElementById('bookForm').reset();
    } else {
        messageDiv.textContent = 'حدث خطأ أثناء إضافة الكتاب.';
        messageDiv.style.color = 'red';
    }
});