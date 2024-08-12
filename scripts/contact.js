// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitFunc = function() {
    const contact = document.getElementById('contact-page');
    contact.innerHTML = "<p>Thank you for your message</p>";
    contact.classList.add('large-text');
    contact.querySelector('p').style.fontSize = '24px';
    contact.style.justifyContent = 'flex-start';
};

// Add event listener to the submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitFunc);