const emailInput = document.getElementById('email');
const emailIconError = document.querySelector('.email-icon-error');
const emailTextError = document.querySelector('.email-text-error');
const emailForm = emailInput.closest('form');



function ValidateEmail(email) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailFormat.test(email);   
}


emailForm.addEventListener('submit', (e) => {
    const email = emailInput.value.trim();
    console.log("here1");
    if(!ValidateEmail(email)) {
        e.preventDefault();
        emailIconError.classList.remove('none');
        emailTextError.classList.remove('none');
        emailInput.classList.add('error-border');
    } 
})