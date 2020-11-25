let answer = "";
let points = 0;
    do {
        answer = prompt("Сколько будет 2+2", answer);
        if(answer)
            break;
        else
            alert("Введите число");
    } while(true);
    if(answer == 4)
        points += 10;
    console.log(`Пользователь набрал ${points} очков`);
    answer = confirm("Солнце восходит на востоке?");
    points += answer ? 10 : 0;
    console.log("Пользователь набрал " + points + " очков");
    answer = "";
    do {
        answer = prompt("Сколько будет 5 << 2", answer);
        if(answer)
            break;
        else
            alert("Введите число");
    } while(true);
    if(answer == 20)
        points = points + 10;
    console.log("Пользователь набрал " + points + " очков");
    alert("Вы набрали " + points + " очков");