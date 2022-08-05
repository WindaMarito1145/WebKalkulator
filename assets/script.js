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

//fungsi untuk menetapkan sebuah operator
function handleOperator(operator) {
    if (calculator.isWaitForSecondNumber) {
        calculator.operator = operator;
        calculator.isWaitForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        //mengatur ulang niali display number supaya tombol selanjutnya mulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan')
    }
    
}

//fungsi untuk kalkulasi nilai
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda Belum menetapkan operator');
        return;
    }
    
    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
        
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
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

    if(target.classList.contains('equals')){
        performCalculation();
        updateDisplay();
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
    }
    
    inputDigit(target.innerText);
    updateDisplay();
   });
    
}