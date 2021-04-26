// Задание 1:

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2  /* префиксная форма сначала прибавляет 1 и потом возвращает значение*/
// d = b++; alert(d);           // 1  /* постфиксная форма сначала возвращает значение и потом прибавляет 1*/
// c = (2+ ++a); alert(c);      // 5  /* a = 2 из первого примера, добавляем еще 1 и плюсуем 2, получается 5*/
// d = (2+ b++); alert(d);      // 4  /* b = 2 из второго примера, сначала возвращается значение 2 и плюсуем 2, получаем 4. единица приплюсуется после сложения операндов*/
// alert(a);                    // 3  /* приплюсовали к исходному значению по 1 два раза, в 1 и 3 примерах*/
// alert(b);                    // 3  /* приплюсовали к исходному значению по 1 два раза, во 2 и 4 примерах*/



// Задание 2:

// var a = 2;
// var x = 1 + (a *= 2);  /* ответ: 5, т.к. значение а мы умножаем на 2 и плюсуем 1*/

// Задание 3:

// let a = -10;
// let b = -4;

// if (a >= 0 && b >= 0) {
//     console.log(a - b);
// }
// else if (a < 0 && b < 0) {
//     console.log(a * b);
// }
// else
//     console.log(a + b);

// Задание 4:

// let a = 8;
// let enumer = '';
// let i = a;

// switch (a) {
//     case 1:
//         enumer += ' ' + i++
//     case 2:
//         enumer += ' ' + i++
//     case 3:
//         enumer += ' ' + i++
//     case 4:
//         enumer += ' ' + i++
//     case 5:
//         enumer += ' ' + i++
//     case 6:
//         enumer += ' ' + i++
//     case 7:
//         enumer += ' ' + i++
//     case 8:
//         enumer += ' ' + i++
//     case 9:
//         enumer += ' ' + i++
//     case 10:
//         enumer += ' ' + i++
//     case 11:
//         enumer += ' ' + i++
//     case 12:
//         enumer += ' ' + i++
//     case 13:
//         enumer += ' ' + i++
//     case 14:
//         enumer += ' ' + i++
//     case 15:
//         enumer += ' ' + i++
//     default:
//         console.log(enumer);
//         break;
// }

// Задание 5:

function sum(a, b) {
    return a + b;
}

function subtr(a, b) {
    return a - b;
}

function multip(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// Задание 6:

function mathOperation(a, b, operation) {
    switch (operation) {
        case sum:
            console.log(sum(a, b))
            break;
        case subtr:
            console.log(subtr(a, b))
            break;
        case multip:
            console.log(multip(a, b))
            break;
        case division:
            console.log(division(a, b))
            break;
    }
}

mathOperation(3, 5, division)