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
background.Container.addEventListener('click', (event) => {
    if (event.target === background.Container) {
        console.log('Background container clicked');
    } else {
        event.stopPropagation();
    }
    form.addEventListener('mouseover', (event) => {
        event.stopPropagation();
        const tooltip = event.target.closest('.form-group')?.querySelector('.tooltip');
        if (tooltip) tooltip.style.display = 'block';
    });
    form.addEventListener('mouseout', (event) => {
        event.stopPropagation();
        const tooltip = event.target.closest('.form-group')?.querySelector('.tooltip');
        if (tooltip) tooltip.style.display = 'none';
    });
});
form.addEventListener('input', (event) => {
    event.stopPropagation();
    if (event.target.id === 'comments') {
        const maxLength = 250;
        const currentLength = event.target.value.length;
        document.getElementById('char-count').textContent = `${maxLength - currentLength}`;
    }
});

document.querySelectorAll('.error').forEach(span.textContent = '');
let isFormValid = true;
if (nameInput.value.trim() === '') {
    document.getElementById('name-error').textContent = 'Name is required.';
    isFormValid = false;
}
if (emailInput.value.trim() === '') {
    document.getElementById('email-error').textContent = 'Email is required.';
    isFormValid = false;
} else if (!validateEmail(emailInput.value.trim())) {
    document.getElementById('email-error').textContent = 'Invalid email format.';
    isFormValid = false;
}
if (commentsInput.value.trim() === '') {
    document.getElementById('comments-error').textContent = 'Comments are required.';
    isFormValid = false;
}
if (!isFormValid) {
    const newEntry = document.createElement('div');
    newEntry.innerHTML = '<strong>${nameInput.value.trim()}</strong>: ${commentsInput.value.trim()}';
    document.getElementById('feedback-list').appendChild(newEntry);
    form.reset();
    document.getElementById('char-count').textContent = '250';
}
