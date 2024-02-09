// // ЗАДАНИЕ:
// // 06-02-2024 1:02
// // 1. пользователь вводит число - длина пароля
// // программа должна сгенерировать пароль заданной длины
// // который может включать в себя: английские буквы (маленькие/большие), цифры (0-9), знаки
// let passlenght = parseInt(prompt('Введите количество символов пароля: '));
// let newPass = "";
// let alf = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// for (let i = 0; i < passlenght; i++) {
//     newPass += alf[Math.floor(Math.random() * alf.length)];
// }
// alert(`Новый сгенерированный пароль ${newPass}`);
// // ДОП ЗАДАНИЕ: копировать пароль в буфер обмена браузера (используя BOM, загуглить)
// navigator.clipboard.writeText(newPass);


//[1:04] Черемнов Николай
    // 2. пользователь вводит строку
// необходимо вывести в консоль каждый символ, встречающийся в этой строке (без повторений)
// а так же кол-во повторений этого символа в строке
// > hello world!
// 'h' - 1
// 'e' - 1
// 'l' - 3
// 'o' - 2
// ' ' - 1
// 'w' - 1
// 'r' - 1
// 'd' - 1
// '!' - 1
let str = prompt('Введите строку: ');
let sumbols = {};
for(let sumbol of str)
{
    if(sumbol in sumbols){
        sumbols[sumbol]++;
    }else{
        sumbols[sumbol] = 1;
    }
}

for (let sumbol in sumbols){
    console.log(`${sumbol} : ${sumbols[sumbol]}`);
}
