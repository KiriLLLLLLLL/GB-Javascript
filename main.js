"use strict"


// Задание 1:

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// let a = 2;

// iter:
// while (a < 100) {
//     if (a == 2) {
//         console.log(a++);

//     }
//     else {
//         let simple = true;
//         let i = 2;
//         while (i < a) {
//             if (a % i == 0) {
//                 simple = false;
//                 a++;
//                 continue iter;
//             }
//             if (simple == true) {
//                 console.log(a++);
//             }
//         }
//     }


// }

// Задание 2:

// 2.  С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// let basket = [

//     { name: "тормозные колодки", price: 3600, amount: 1 },
//     { name: "масло 10/40", price: 800, amount: 4 },
//     { name: "фильтр масленный", price: 450, amount: 1 }

// ];

// let basketPrice = 0;
// for (let product of basket) {
//     basketPrice += product.price * product.amount;
//     console.log("Товар: " + product.name + ". Стоимость: " + product.price * product.amount);
// }

// console.log("Сумма заказа: " + basketPrice);

// Задание 3:

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// function countBasketPrice(array) {
//     let totalPrice = 0;
//     for (let product of array) {
//         totalPrice += product.price * product.amount;
//     }
//     return totalPrice;
// }


// console.log("Общая сумма заказа: " + countBasketPrice(basket));

// Задание 4:

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

//for (let i = 0; i < 10; console.log(i++)) { }

// Задание 5:

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
};