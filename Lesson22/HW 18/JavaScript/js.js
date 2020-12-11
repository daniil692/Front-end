function askName() {
    let result = prompt('What is your name?');
    if (result === '' || result === null){
        result = 'Luba228';
    }
    return result;
}

function askNumber() {
    let result;
    do{
        result = prompt('Enter the number');
    } 
    while(!isValid(result));
    return result;
}

function isValid(value){
    return !isNaN(value) && value !== null && value !== '';
}

function isInRange(number) {
    return number >= 0 && number <= 100;
}

function sayHello() {
    let name = askName();
    let h1Elem = document.createElement('h1');
    h1Elem.textContent = `Hello, ${name}!`;
    document.body.appendChild(h1Elem);
}

function printList() {
    let num = askNumber();
    let ulElem = document.createElement('ul');
    for(let i = 1; i <= num; i++){
        let liElem = document.createElement('li');
        liElem.textContent = i;
        ulElem.appendChild(liElem);
    }
    document.body.appendChild(ulElem);
    
}

// sayHello();
// printList();