document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form'); 
    const resultElement = document.getElementById('result'); 
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const number1 = parseFloat(document.getElementById('number1').value); 
        const number2 = parseFloat(document.getElementById('number2').value); 
        const operator = document.getElementById('operator').value; 

        let result;

        
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number2 !== 0 ? number1 / number2 : 'Error (Division by zero)';
                break;
            default:
                result = 'Invalid operator';
        }

       
        if (typeof result === 'number') {
            resultElement.textContent = `Result = ${result.toFixed(2)}`;
        } else {
            resultElement.textContent = `Result = ${result}`;
        }
    });
});


