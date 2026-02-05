
const display = document.getElementById('display');

function appendToDisplay(param) { display.value += param }
function clearDisplay() { display.value = "" }

function calculate() {
    try { display.value = "= " + eval(display.value) }
    catch (err) { console.error(err); display.value="Error"; }
}

