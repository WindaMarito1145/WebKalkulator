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
    calculator.displayNumber += digit;
}

//variabel button
const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
   button.addEventListener('click', function (event){
    
    //mendapatkan objek elemen yang di klik
    const target = Event.target;
    
    inputDigit(target.innerText);
    updateDisplay();
   });
    
}