// function sayHello(){
//     alert('Hello');
//     firstH2.removeEventListener('click', sayHello)
// }

function sayHello(){
    alert('Hello');
    this.removeEventListener('click', sayHello)
}

let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');

title1.addEventListener('click', sayHello);
title2.addEventListener('click', sayHello);










// let h2s = document.getElementsByTagName('h2');
// let firstH2 = h2s[0];

// // firstH2.onclick = sayHello;
// firstH2.addEventListener('click', sayHello)
// firstH2.addEventListener('click', function(){
//     console.log('SecondEvent');
// });