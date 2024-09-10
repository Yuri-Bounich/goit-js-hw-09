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
    textarea.style.border =  '1px solid #808080';
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



