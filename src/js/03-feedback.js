import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements.email;
const messageInput = formEl.elements.message;
const button = document.querySelector('button');

const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFeedback) {
    emailInput.value = savedFeedback.email;
    messageInput.value = savedFeedback.message;
    button.disabled = !(emailInput.value && messageInput.value);
}



formEl.addEventListener('input', throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.value,
        message: messageInput.value
    }));

    button.disabled = !(emailInput.value && messageInput.value);
}, 500));

formEl.addEventListener('submit', event => {
    event.preventDefault();
    
    console.log({
        email: emailInput.value,
        message: messageInput.value
    });
    
    formEl.reset();
    localStorage.removeItem('feedback-form-state');
    button.disabled = true;
});


    



