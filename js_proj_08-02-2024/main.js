/* 
    ЗАДАНИЕ: при нажатии на элемент "input-name-button" должно открываться окно ввода (prompt)
    с предложением ввести имя.
    Пользователь вводит имя и данное имя отображается в элементе "name"

    Для этого необходимо:
    1) Сделать функцию, которая запрашивает у пользователя ввод имени и помещает введенное значение
    в нужный элемент (использовать element.innerText)
    2) Привязать эту функцию к обытию click элемента-кнопки
*/
const userOutput = document.getElementById('name');
let block = document.getElementById('input-name-button');

function userInput() {
    let name = prompt('введите имя');
    userOutput.innerText = name;
}


block.addEventListener('click', userInput);