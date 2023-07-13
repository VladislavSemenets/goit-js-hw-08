// Функція для збереження значень полів у локальне сховище
function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}

// Функція для заповнення полів форми зі значень у локальному сховищі
function loadFormState() {
  const formState = localStorage.getItem("feedback-form-state");
  if (formState) {
    const parsedFormState = JSON.parse(formState);
    emailInput.value = parsedFormState.email;
    messageTextarea.value = parsedFormState.message;
  }
}

// Отримуємо посилання на форму
const feedbackForm = document.getElementById("feedbackForm");

// Перевіряємо, чи існує елемент форми
if (feedbackForm) {
  // Отримуємо посилання на поля форми
  const emailInput = feedbackForm.querySelector("#emailInput");
  const messageTextarea = feedbackForm.querySelector("#messageTextarea");

  // Викликаємо функцію для заповнення полів форми під час завантаження сторінки
  loadFormState();

  // Відстежуємо подію input на формі і зберігаємо значення полів у сховище з певною затримкою
  const throttledSaveFormState = _.throttle(saveFormState, 500);
  feedbackForm.addEventListener("input", throttledSaveFormState);

  // Обробляємо подію submit форми
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Submitted form with values:");
    console.log({
      email: emailInput.value,
      message: messageTextarea.value,
    });

    // Очищуємо сховище
    localStorage.removeItem("feedback-form-state");
    // Очищуємо поля форми
    emailInput.value = "";
    messageTextarea.value = "";
  });
}
