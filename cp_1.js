const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const submitButton = document.getElementById('submit');
const form = document.getElementById('feedback-form');
const background = document.getElementById('background');
const commentCharCount = document.getElementById('commentCharCount');
const emailCharCount = document.getElementById('emailCharCount');
const nameCharCount = document.getElementById('nameCharCount');

commentsInput.addEventListener('keydown', function() {
    const currentLength = commentsInput.value.length;
    commentCharCount.textContent = `${currentLength} / 500`;
    maxLength = 500;
    if (currentLength >= maxLength) {
        commentCharCount.textContent = `Max characters reached`;
    }
});
emailInput.addEventListener('keydown', function() {
    const emailCurrentLength = emailInput.value.length;
    emailCharCount.textContent = `${emailCurrentLength} / 200`;
    maxLength = 200;
    if (emailCurrentLength >= maxLength) {
        emailCharCount.textContent = `Max characters reached`;
    }
});
nameInput.addEventListener('keydown', function() {
    const nameCurrentLength = nameInput.value.length;
    nameCharCount.textContent = `${nameCurrentLength} / 200`;
    maxLength = 200;
    if (nameCurrentLength >= maxLength) {
        nameCharCount.textContent = `Max characters reached`;
    }
});
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
document.querySelectorAll('.error').forEach(span => span.textContent = '');
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
if (commentsInput.value.trim().length > 500) {
    document.getElementById('comments-error').textContent = 'Comments cannot exceed 500 characters.';
    isFormValid = false; }
    if (emailInput.value.trim().length > 200) {
        document.getElementById('email-error').textContent = 'Email cannot exceed 200 characters.';
        isFormValid = false;
    }
    if (nameInput.value.trim().length > 200) {
        document.getElementById('name-error').textContent = 'Name cannot exceed 200 characters.';
        isFormValid = false;
    }
if (!isFormValid) {
    const newEntry = document.createElement('div');
    newEntry.innerHTML = '<strong>${nameInput.value.trim()}</strong>: ${commentsInput.value.trim()}';
    document.getElementById('feedback-list').appendChild(newEntry);
    form.reset();
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });
});



