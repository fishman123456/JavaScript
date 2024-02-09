// 1. Пользователь вводит a, b - целые числа
// необходимо вычислить a^b
// использовать ** , Pow нельзя
// использовать цикл for 

// a^b = a * a * a * ... * a

// 2^5 = 32
// 3^3 = 27
// 2^-3 = 0.125
// 0^x = 0
// x^0 = 1
let numusers = prompt(`введите кол-во элементов факториала`);
let intnumusers = parseInt(numusers);
let last = 1;
if (numusers > 0) {
    for (i = 1; i <= intnumusers; i++) {
        last *= i;
    }
    alert(`факториал из ${numusers} чисел = ${last}`);
}

