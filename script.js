function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Corrige a expressão para funções matemáticas do JavaScript
        let expression = display.value;
        expression = expression.replace(/\^/g, '**'); // Potência
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

