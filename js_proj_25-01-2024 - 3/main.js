// Задача: пользователь вводит 3 числа
// программа должна вывести максимальное из этих чисел
let n1 = parseFloat(prompt('Enter n1: '));
let n2 = parseFloat(prompt('Enter n2: '));
let n3 = parseFloat(prompt('Enter n3: '));

let res= Math.max(n1,n2,n3)


alert(`MAX = ${res}`)