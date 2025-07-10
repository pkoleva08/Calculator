console.log("Calculator run")
const display = document.getElementById('display');

for (let index = 0; index < 10; index++) {
    const element = document.getElementById(`btn-${index}`);
    element.addEventListener("click", () => myFunction(index))
}
const btnDel = document.getElementById(`btn-delete`);
btnDel.addEventListener("click", () => backspase(btnDel.textContent));

const btnClear = document.getElementById(`btn-clear`);
btnClear.addEventListener("click", () => clearDisplay(btnClear.textContent0));

const btnPercent = document.getElementById(`btn-percent`);
btnPercent.addEventListener("click", () => parcent(btnPercent.textContent));

const btnSqrt = document.getElementById(`btn-sqrt`);
btnSqrt.addEventListener("click", () => sqrt(btnSqrt.textContent));

// const btnDivide = document.getElementById(`btn-divide`);
// btnDivide.addEventListener("click", () => myFunction(btnDivide.textContent));

const btnDResult = document.getElementById(`btn-result`);
btnDResult.addEventListener("click", () => calculate(btnDResult.textContent));

const btnDecimal = document.getElementById(`btn-decimal`);
btnDecimal.addEventListener("click", () => myFunction(btnDecimal.textContent));

// const btnPlus = document.getElementById(`btn-plus`);
// btnPlus.addEventListener("click", () => myFunction(btnPlus.textContent));

// const btnMinus= document.getElementById(`btn-minus`);
// btnMinus.addEventListener("click", () => myFunction(btnMinus.));

// const btnMultyPl = document.getElementById(`btn-multypl`);
// btnMultyPl.addEventListener("click", () => myFunction(btnMultyPl.textContent));

document.querySelectorAll('[data-op]').forEach(btn => {
    btn.addEventListener('click', () => {
        const operator = btn.getAttribute('data-op');
        display.value += operator;
    });
});

function myFunction(value) {
    console.log(value);
    display.value += value;
}
function calculate() {

    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error'
    }
}
function clearDisplay() {
    display.value = '';
}
function backspase() {
    display.value = display.value.slice(0, -1)
}

function square() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.square(value, 2);
    } else {
        display.value = 'Error'
    }
}

function sqrt() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Error'
    }
}
function parcent() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100;
    } else {
        display.value = 'Error'
    }

}
