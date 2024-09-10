console.log("Form")

const paragraphs = document.querySelectorAll('label');

// Додавання стилю до кожного елемента <label>
paragraphs.forEach(label => {
    label.style.fontFamily = 'Montserrat';
    label.style.fontSize = '18px'; 
    label.style.fontWeight = '400';
    label.style.fontColor = '#2E2F42';
    label.style.display = "flex";
    label.style.flexDirection = 'column';
    label.style.marginBottom = "8px";
    label.style.gap = "8px";
});


const emailInput = document.querySelectorAll('input');

emailInput.forEach(input => {
    input.style.width = '360px';
    input.style.height = '40px';
    input.style.border =  '1px solid #808080';
    input.style.borderRadius = '4px';
    input.style.fontFamily = 'Montserrat';
    input.style.fontWidth = '400px';
    input.style.fontSize = '16px';
    input.style.lineHeight = '24px';
    input.style.letterSpacing = '4%';
    input.style.color = '#2E2F42';
    input.style.paddingLeft = '16px';
    input.style.paddingTop = '8px';  
    input.style.paddingBottom = '8px';    
    input.style.marginBottom = '8px';
});


const textareaInput = document.querySelectorAll('textarea');

textareaInput.forEach(textarea => {
    textarea.style.width = '360px';
    textarea.style.height = '80px';
    textarea.style.borderRadius = '4px';
    textarea.style.fontFamily = 'Montserrat';
    textarea.style.fontWidth = '400px';
    textarea.style.fontSize = '16px';
    textarea.style.lineHeight = '24px';
    textarea.style.letterSpacing = '4%';
    textarea.style.color = '#2E2F42';
    textarea.style.paddingLeft = '16px';
    textarea.style.paddingTop = '8px';  
    textarea.style.paddingBottom = '8px';    
    textarea.style.marginBottom = '16px';
    textarea.classList.add('textarea-js');
});

const btnStyle = document.querySelectorAll('button');

btnStyle.forEach(button => {
    button.style.width = '95px';
    button.style.height = '40px';
    button.style.borderRadius = '8px';
    button.style.border = 'none';
    button.style.display = 'flex';
    button.style.justifyContent = 'center';
    button.style.alignItems = 'center';
    button.style.padding = '8px 16px 8px 16px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = "Montserrat";
    button.style.fontWeight = '500';
    button.style.fontSize = '16px';
    button.style.letterSpacing = '0.04em';
    button.style.textAlign = 'center';
    button.style.color = '#FFFFFF';
    button.classList.add('btn-js');
    });


    // Оголошення об'єкта formData 
const formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');

// Завантаження даних із локального сховища при завантаженні сторінки
const savedData = localStorage.getItem("feedback-form-state") ?? '';

if (savedData) {
    // Заповнюємо форму даними з локального сховища, якщо вони існують
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Відстеження події input з використанням делегування
form.addEventListener('input', (event) => {
    // Оновлюємо об'єкт formData
    formData[event.target.name] = event.target.value.trim();
    
    // Зберігаємо актуальні дані в локальне сховище
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

// Обробка події submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Перевірка, чи обидва поля заповнені
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields"); // Сповіщення, якщо поля порожні
        return;
    }

    console.log(formData); // Вивід об'єкта в консоль

    // Очищення локального сховища, об'єкта formData 
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    // Очищуємо поля форми
    form.reset(); 
});




