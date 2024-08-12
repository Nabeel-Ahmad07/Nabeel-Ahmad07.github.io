document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                handleOperator(button.innerText);
            } else if (button.classList.contains('equal')) {
                calculate();
            } else if (button.classList.contains('reset')) {
                reset();
            } else {
                handleNumber(button.innerText);
            }
        });
    });

    function handleNumber(value) {
        if (currentInput.length < 16) { // Limit input length
            currentInput += value;
            updateDisplay();
        }
    }

    function handleOperator(value) {
        if (currentInput === '' && value !== '-') return;
        if (operator && currentInput) {
            calculate();
        }
        previousInput = currentInput;
        operator = value;
        currentInput = '';
    }

    function calculate() {
        if (!previousInput || !operator || !currentInput) return;

        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function reset() {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function updateDisplay() {
        display.value = currentInput || '0';
    }
});