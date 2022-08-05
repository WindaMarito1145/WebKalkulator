//objek 
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};

//fungsi umum kalkulator
function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;   
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}

//fungsi memasukan angka
function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
}

//fungsi negative
function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

//variabel button
const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
   button.addEventListener('click', function (event){
    
    //mendapatkan objek elemen yang di klik
    const target = event.target;

    if(target.classList.contains('clear')){
        clearCalculator();
        updateDisplay();
        return;
    }

    if(target.classList.contains('negative')){
        inverseNumber();
        updateDisplay();
        return;
    }
    
    inputDigit(target.innerText);
    updateDisplay();
   });
    
}