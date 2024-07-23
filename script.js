const buttons = document.querySelectorAll('.calc-button');
const display = document.querySelector('.tela');
let currentInput = '';
function updateDisplay(value) {
    display.textContent = value || '0';
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } 
         else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
        } 
        else if (value === '=') {
            try {
                currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/')).toString();
            } catch {
                currentInput = 'Erro';
            }
        } 
        
        else {
            currentInput += value;
        }
      updateDisplay(currentInput);
    });
});