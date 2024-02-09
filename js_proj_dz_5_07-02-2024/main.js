// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
// ВВЕДЕНИЕ В ООП
// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

// class Car {
//     constructor(manufacturer, model, year, averageSpeed) {
//       this.manufacturer = manufacturer;
//       this.model = model;
//       this.year = year;
//       this.averageSpeed = averageSpeed;
//     }

//     getCarInfo() {
//       console.log("Информация об автомобиле:");
//       console.log("Производитель:", this.manufacturer);
//       console.log("Модель:", this.model);
//       console.log("Год выпуска:", this.year);
//       console.log("Средняя скорость:", this.averageSpeed, "км/ч");
//     }

//     calculateTravelTime(distance) {
//       const travelTime = distance / this.averageSpeed;
//       const restTime = Math.floor(travelTime / 4) * 1;
//       const totalTime = travelTime + restTime;
//       console.log("Для преодоления расстояния", distance, "км со средней скоростью", this.averageSpeed, "км/ч, потребуется примерно", totalTime, "часов.");
//     }
//   } 
//   // Создаем объект автомобиля
//   const car = new Car("ВАЗ", "Нива", 1984, 65);
//   // Выводим информацию об автомобиле
//   car.getCarInfo();
//   // Подсчитываем время для преодоления расстояния
//   car.calculateTravelTime(436);


// Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
// 1. Функция сложения 2-х объектов-дробей.denom
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

// Создание объекта для хранения дроби
// function Fraction(num, denom) {
//   num = num;
//   denom = denom;
// }

// // Функция сложения двух дробей
// function addFractions(fr1, fr2) {
//   let resultnum =
//     fr1.num * fr2.denom +
//     fr2.num * fr1.denom;
//   let resultdenom = fr1.denom * fr2.denom;
//   return new Fraction(resultnum, resultdenom);
// }

// // Функция вычитания двух дробей
// function subtractFractions(fr1, fr2) {
//   let resultnum =
//     fr1.num * fr2.denom -
//     fr2.num * fr1.denom;
//   let resultdenom = fr1.denom * fr2.denom;
//   return new Fraction(resultnum, resultdenom);
// }

// // Функция умножения двух дробей
// function multiplyFractions(fr1, fr2) {
//   let resultnum = fr1.num * fr2.num;
//   let resultdenom = fr1.denom * fr2.denom;
//   return new Fraction(resultnum, resultdenom);
// }

// // Функция деления двух дробей
// function divideFractions(fr1, fr2) {
//   let resultnum = fr1.num * fr2.denom;
//   let resultdenom = fr1.denom * fr2.num;
//   return new Fraction(resultnum, resultdenom);
// }

// // Функция сокращения дроби
// function simplifyFraction(fraction) {
//   let socrDrob = getsocrDrob(fraction.num, fraction.denom);
//   let simplifiednum = fraction.num / socrDrob;
//   let simplifieddenom = fraction.denom / socrDrob;
//   return new Fraction(simplifiednum, simplifieddenom);
// }

// // Вспомогательная функция для нахождения наибольшего общего делителя (НОД)
// function getsocrDrob(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return getsocrDrob(b, a % b);
// }

// // Создание объектов дробей
// let fr1 = new Fraction(3, 4);
// let fr2 = new Fraction(1, 2);

// // Сложение двух дробей
// let sum = addFractions(fr1, fr2);
// console.log("Сумма:", sum.num, "/", sum.denom);

// // Вычитание двух дробей
// let difference = subtractFractions(fr1, fr2);
// console.log("Разность:", difference.num, "/", difference.denom);

// // Умножение двух дробей
// let product = multiplyFractions(fr1, fr2);
// console.log("Произведение:", product.num, "/", product.denom);

// // Деление двух дробей
// let quotient = divideFractions(fr1, fr2);
// console.log("Частное:", quotient.num, "/", quotient.denom);

// // Сокращение дроби
// let simplifiedFraction = simplifyFraction(fr1);
// console.log(
//   "Сокращенная дробь:",
//   simplifiedFraction.num,
//   "/",
//   simplifiedFraction.denom
// );


// Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.


// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».