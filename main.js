'use strict'

// Задание 1:

// Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и 
// вернуть пустой объект.


// function fromNumToObj(num) {

//     if (num > 999) {
//         console.log('Нужно меньше');
//         return {};
//     }
//     else if (num < 0) {
//         console.log('Нужно больше');
//         return {};
//     }
//     else if (isNaN(num)) {
//         console.log('Нужно число');
//         return {};
//     }

//     let objResult = {
//         'единицы': num % 10,
//         'десятки': (Math.floor(num / 10)) % 10,
//         'сотни': Math.floor(num / 100)
//     };

//     return objResult;

// };

// console.log(fromNumToObj(204));


// Задание 2:

// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
};

const products = [];

products.push(
    new Product(1, "тормозные колодки", 3600)
);

products.push(
    new Product(2, "масло 10/40", 800)
);

products.push(
    new Product(3, "фильтр масленный", 450)
);

console.log(products);

let order = [];

function addToOrder(order, base, prod_id) {
    const prodIndex = base.findIndex(function (product) {
        return product.id == prod_id
    });
    const index = (isInOrder(prod_id, order));
    if (index != -1) {
        order[index].quantity += 1;
    }
    else {
        order.push({
            id: base[prodIndex].id,
            name: base[prodIndex].name,
            price: base[prodIndex].price,
            quantity: 1
        });
    };
};

function isInOrder(id, order) {
    return order.findIndex(product => product.id == id)
};

function delFromOrder(id, order) {
    const index = (isInOrder(id, order));
    if (index === -1) {
        console.log('Нет такого товара')
    }
    else if (order[index].quantity > 1) {
        order[index].quantity -= 1
    }
    else {
        order.splice(index, 1)
    };
};

function countBasketPrice(array) {
    let totalPrice = 0;
    for (let product of array) {
        totalPrice += product.price * product.quantity;
    }
    return totalPrice;
};

addToOrder(order, products, 1);
addToOrder(order, products, 3);
addToOrder(order, products, 2);
addToOrder(order, products, 1);

console.log(order);

delFromOrder(1, order);
delFromOrder(2, order);

console.log(order);

console.log(countBasketPrice(order));