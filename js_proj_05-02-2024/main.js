// ЗАДАНИЕ: реализовать набор процедур по работе с массивом и 
// сценарий тестирования данных процедур в процедуре main
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

// generateRandomArray генерирует массив случайных целых чисел в диапазоне от min до max
// вход: n - размер массив (number, > 0, целое), min/max (number, целое, min <= max)
// выход: сгенерированный массив либо null, если переданы некорректные параметры

function generateRandomArray(n, min, max) {
    if (!Number.isInteger(n) || n < 0 || !Number.isInteger(min + max) || min > max) {
        return null;
    }
    let arr = [];
    for (let index = 0; index < n; index++) {
        arr[index] = getRandomInt(min, max);
    }
    return arr;
}

// logArray выводит массив в консоль, используя console.log
// вход: arr - массив для вывода
function logArray(arr) {
    for (let item of arr) {
        console.log(item);
    }
}

// findMin находит минмиальное значение в массив
// вход: массив целых чисел
// выход: минимальное значение
function findMin(arr) {
    let min = 0;
    for (let item in arr) {
        if (min > arr[item]) {
            min = arr[item];
        }
    }
    return min;
}

// аналогично
function findMax(arr) {
    let max = 0;
    for (let item in arr) {
        if (max < arr[item]) {
            max = arr[item];
        }
    }
    return max;
}

// getSum - сумма элементов массива
function getSum(arr) {
let usersum = 0;
for(let item of arr){
    usersum += item;
}
return usersum;
}

// getAvg - среднее арифметическое элементов массива
function getAvg(arr) {
    if (arr.length !== 0){
        return getSum(arr) / arr.lenght;
    }
    return 0;
}

// доп задание* - реализовать функцию, которая перемещает все нули в конец массива, сохраняя при этом порядок 
// остальных элементов: [10, 5, 0, 3, 0, 0, -1, 0] -> [10, 5, 3, -1, 0, 0, 0, 0]


// main - точка входа программы
function main() {
    // 1) сгененрировать массив случайных целых чисел в заданном диапазоне заданной длины (вводит пользователь)
    let userlen = parseInt(prompt("Введите длину массива : "));
    let usermin = parseInt(prompt("Введите минимальное значение в массиве : "));
    let usermax = parseInt(prompt("Введите максимальное значение в массиве : "));
    let arr = generateRandomArray(userlen, usermin, usermax);
    alert(arr);
    // 2) вывести этот массив в консоль
    logArray(arr);
    // 3) найти минимальное и максимальное значение в массиве
    console.log(parseInt(findMin(arr)));
    console.log(parseInt(findMax(arr)));
    // 4) найти сумму и среднее арифметическое элементов в массие
    console.log(parseInt(getSum(arr)));
    console.log(parseInt(getAvg(arr)));
}

main();
