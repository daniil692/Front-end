let answer = prompt('Enter the number');

if(isValidNumber(answer)) {
    answer = Number(answer);
}
else{
    alert('Я не могу это преобразовать к числу')
}

function isValidNumber(value){
    if (isNaN(value)){
        return false;
    }
    else if ('' === value) {
        return false;
    }
    else if (balue === null){
        return false;
    }
    else{
        return true;
    }
}