
// Задача: написать программу решения КВУР вида ax^2 + bx + c = 0
// Пользователь вводит коэффициенты a, b, c - могут быть целые или дробные
// Программа решает КВУР и выводит ответ
// Алгоритм решения КВУР:
// 1) D = b^2 - 4ac
// 2) D < 0 -> корней нет
// 3) D == 0 -> x = -b / 2a
// 4) D > 0 -> x1 = (-b - sqrt(D)) / 2a; x2 = (-b + sqrt(D)) / 2a


let a = parseFloat(prompt('ввод a:'));
let b = parseFloat(prompt('ввод b:'));
let c = parseFloat(prompt('ввод c:'));

let D = (b ** 2) - (4 * a * c);

if (D < 0) {

    alert('Нет корней');

} else if (D == 0) {

    let x = -b / (2 * a);

    alert(`один корень x =${x}`);

} else if (D > 0) {

    x1 = (-b - Math.sqrt(D)) / (2 * a);

    x2 = (-b + Math.sqrt(D)) / (2 * a);

    alert(`два корня x1 =${x1} x2 =${x2}`);

} 

