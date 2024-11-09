
const form = document.getElementById('contactform');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Perform form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const contactMethod = document.getElementById('contact-method').value;

    if(!email || !name || !phone ||!message ){
        alert = 'Fill all the requirement'
    }
    form.reset();
});
