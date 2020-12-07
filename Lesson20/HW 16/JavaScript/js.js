let a = prompt('Enter your first number');
let b = prompt('Enter your second number');
let calc = prompt('Что вы хотите сделать с этими числами?: Сложить (+), Вычесть (-), Умножить (*), Разделить(/)')

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

if(valid === true && calc === "+"){
    return Math.calcAddition();
}

else if(valid === true && calc === "-") {
    return calcSubtraction();
}

else if(valid === true && calc === "*") {
    return calcMultiplication();
}

else if(valid === true && calc === "/") {
    return calcDegree();
}

else{
    return alert('Not valid number')
}