// Hämta element
const checkbox = document.getElementById('divStyle');
const textfields = document.getElementsByClassName('textfield');
const button = document.getElementById('myButton');
const divElement = document.getElementById('myDiv');

// Funktion för inputfält
function handleInput(e) {
    console.log("Event target:", e.target);
    const fieldName = e.target.name;

    if (fieldName === 'content') {
        divElement.innerHTML = e.target.value;
    }
}

// Eventlyssnare
checkbox.addEventListener('change', function() {
    const colorInput = document.getElementById('color');
    divElement.style.backgroundColor = colorInput.value;
});

for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener('input', handleInput);
}

button.addEventListener('click', function() {
    divElement.remove();
});
