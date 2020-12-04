let totalAnsw = 0;

let q = [
    {
        qes: 'Сколько будет 2+2?',
        answ: 4,
        type: 'prompt'
    },

    {
        qes: 'Солнце встает на востоке?',
        answ: true,
        type: 'confirm'
    },

    {
        qes: 'Сколько будет 5 << 2 ?',
        answ: 20,
        type: 'prompt'
    }
];

function valid(num) 
{
    if (isNaN(num) || num === null || '' === num) 
    {
        return false;
    } 
    else 
    {
        return true;
    }
}

function answFunc(quessArr, i)
{
    let answ = "";
    switch (quessArr[i].type) 
    {
        case 'prompt':
            answ = prompt(quessArr[i].qes);
            if (!valid(answ)) 
            {
                alert("Вы ввели не корректное число");
                i--;
            } 
            else 
            {
                if (answ == quessArr[i].answ) 
                {
                    alert("Ваш ответ верный");
                    totalAnsw++;
                } 
                else 
                {
                    alert("Ваш ответ не верный")
                }
            }
            break;

        case 'confirm':
            answ = confirm(quessArr[i].qes);
            if (answ == quessArr[i].answ) 
            {
                alert("Ваш ответ верный");
                totalAnsw++;
            } 
            else 
            {
                alert("Ваш ответ не верный")
            }
            break;
    }
}


for (let i = 0; i < q.length; i++) 
{
    answFunc(q, i)
}

alert("Вы набрали " + totalAnsw*10 + " баллов");