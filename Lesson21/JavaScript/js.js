const person = {
    name: 'Daniil',
    age: 15,
    address: {
        country: 'Ukraine',
        city: 'Dnipro',
        street: 'Tivova',
        house: 1
    },

    phones: [0987654321, 1234567890]
}

// let field = prompt('Enter the field name');
// console.log(person[field]);



// console.log(Object.keys(person));



// let keys = Object.keys(person);
// for (let i = 0; i < keys.length; i++){
//     console.log(person[keys[i]]);
// }



// let keys = Object.keys(person);
// for (let field in person){
//     console.log(field, person[field]);
// }



// let keys = Object.keys(person);
// for (let value of keys){
//     console.log(value);
// }



// const arr = [12, 54];
// console.log(arr, arr.length);

// const arr2 = [34, 45, 56];
// console.log(arr2, arr2.length);

// const result = arr2.concat(arr);
// console.log(result, result.length);



// const arr = [12, 54];
// console.log(arr);
// const arr1 = arr;
// arr1[0] = 999;
// console.log(arr);



// const arr = [12, 54];
// arr.forEach(
//     function(el, index, array){
//         console.log(el, index, array);
//     }
// )




let anyNum = prompt('Введите число')

if(isValidNumber(anyNum)) {
    anyNum = Number(anyNum);
}
else{
    alert('Я не могу преобразовать это к числу')
}

function isValidNumber(value){
    if (isNaN(num) || num === null || '' === num) 
    {
        return false;
    } 
    else 
    {
        return true;
    }
}

let anyNumArr = [anyNum];

for(let i = 0; i < anyNumArr.length; i++){

}