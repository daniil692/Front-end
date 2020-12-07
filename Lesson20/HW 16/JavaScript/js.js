
let a = prompt('Enter your first number');
let b = prompt('Enter your second number');
let calc = prompt('Что вы хотите сделать с этими числами?: Сложить (+), Вычесть (-), Умножить (*), Разделить(/)')

function calcAddition (a, b){
    if(calc === "+"){
        let sum = a + b;
        alert(sum);
    }
}

function calcSubtraction (a, b){
    if(calc === "-"){
        let sub = a - b;
        alert(sub);
    }
}

function calcMultiplication (a, b){
    if(calc === "*"){
        let mul = a * b;
        alert(mul);
    }
}

function calcDegree (a, b){
    if(calc === "/"){
        let deg = a / b;
        alert(deg);
    }
}

function valid(calc) 
{
    if (calc === "+" || calc === "-" || calc === "*" || calc === "/") 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

function calculator(method) {
    switch (method) {
        case "+":
            return window.calcAddition();
        case "-":
            return window.calcSubtraction();
        case "*":
            return window.calcMultiplication();
        case "/":
            return window.calcDegree();
        break;
    } 
}

if(window.valid === true){
    return window.calculator();
}
else{
    return alert("Вы ввели не верный знак")
}