// ЗАДАЧА: пользователь вводит число - целым, положительным
// необходимо разложить это число на простые множители
// необходимо проверять корректность ввода данных
// а так же использовать цикл while в основном алгоритме

// пример работы:
// 15 = 1 * 3 * 5
// 56 = 1 * 2 * 2 * 2 * 7
// 1 = 1
do{
let numberStr = prompt('Enter positive integer number: ');
let number = parseInt(numberStr);
let a = 2;
if (isNaN(number) || number <= 0) {
    alert(`'${numberStr}' is not a positive integer number`);
    if (confirm ('Want to try again?')){
        continue;
    }else{
        break;
    }
} else 
{
    alert(`${a}*`);
    // решить задачу по разложению числа на простые множители
    let result =` ${number} = 1`
    while (number != 1) {
        if (number % a == 0) {
            alert (`* ${a}`);
            result += (`* ${a}`);
            number = number / a;
            //a++;
        } else a++;
    }
alert (result);
}
}while(confirm('Try again?'));
alert('Good bye!');
