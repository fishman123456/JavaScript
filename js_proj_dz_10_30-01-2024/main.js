// Задание
// Вам необходимо самостоятельно решить, для какого задания
// какой оператор ветвления лучше использовать: if, switch или
// тернарный.
// 1. Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...). 30-01-2024 -21-00
// let userage = parseInt(prompt('сколько вам лет'));
// if (userage >= 0 && userage <= 12) {
//     (`вы ребенок`);
// } else if (userage > 12 && userage <= 18) {
//     (`вы подросток`);
// } else if (userage > 18 && userage <= 60) {
//     confirm(`вы взрослый`);
// } else if (userage >= 60) {
//     confirm(`вы пенсионер`);
// }
//-----------------------------------------------------------
// 2. Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

// do {
//     let useriput = prompt(`число от 0 до 9`);
//     let usernum = parseInt(useriput);
//     switch (usernum) {
//         case 0:
//             alert(`)`);
//             break;
//         case 1:
//             alert(`!`);
//             break;
//         case 2:
//             alert(`@`);
//             break;
//         case 3:
//             alert(`#`);
//             break;
//         case 4:
//             alert(`$`);
//             break;
//         case 5:
//             alert(`%`);
//             break;
//         case 6:
//             alert(`^`);
//             break;12
//         case 7:
//             alert(`&`);
//             break;
//         case 8:
//             alert(`*`);
//             break;
//         case 9:
//             alert(`(`);
//             break;
//     }
// } while (useriput == `+`);

//-----------------------------------------------------------
// 3. Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

// let usernum = prompt('ввод числа');
// let num_1 = Number(usernum % 10);
// //alert(`третье число ${num_1}`);
// let num_2 = Number((usernum - num_1) / 10 % 10);
// //alert(`второе число ${num_2}`);
// let num_3 = Number((usernum - num_1 - num_2 * 10)/100);
// alert(`первое число ${num_3}, второе число ${num_2}, третье число ${num_1}`);
// if(num_1 == num_2 || num_1 == num_3 || num_2 == num_3){
//     alert('есть одинаковые цифры!');
// }else alert('нет одинаковых цифр!');

//-----------------------------------------------------------
// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.
// let useryear = prompt('введите год ');
// const getLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// if(getLeapYear(useryear)){
//     alert(` ${useryear} год високостный`)
// } alert(` ${useryear} год  не високостный`)

//-----------------------------------------------------------
// 5. Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.
let usernum = prompt('ввод пятизначного числа');

let num_5 = Number(usernum % 10);
alert(`пятое число ${num_5}`);
let num_4 = Number((usernum - num_5) / 10 % 10);
alert(`четвертое число ${num_4}`);
let num_3 = Number((usernum - num_5 - num_4 * 10) / 1000);
alert(`третье число ${num_3}`);
let num_2 = Number((usernum - num_5 - num_4 - num_3 * 100) / 1000);
alert(`второе число ${num_2}`);
let num_1 = Number((usernum - num_5 - num_4 - num_3 - num_2 * 1000) / 10000);
alert(`первое число ${num_1}`);

alert(`первое число ${num_1}, второе число ${num_2}, третье число ${num_3}
, четвертое число ${num_4}, пятое число ${num_5}`);

//-----------------------------------------------------------
// 6. Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

//-----------------------------------------------------------
// 7. Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

//-----------------------------------------------------------
// 8. Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.

//-----------------------------------------------------------
// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.

//-----------------------------------------------------------
// 10. Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.


