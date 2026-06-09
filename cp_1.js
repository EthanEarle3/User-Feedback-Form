const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (name === '' || email === '' || comments === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your feedback, ' + name + '!');
    nameInput.value = '';
    emailInput.value = '';
    commentsInput.value = '';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });
});
