let n = prompt('Enter number', '5')

function calculateFactorial(n) {
    if(n === 0 || n === 1){
        return 1;
    }

    return n * calculateFactorial(n-1);
}