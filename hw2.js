//пример 1. Плюс перед числом сначала прибавляет 1, а затем складывает с числом.
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
//пример 2. Плюс после чила сначала выдает число. Так как после плюса нет данных, выводится число.
d = b++;
alert(d); //ответ: 1
//пример 3. то же, что и в первом варианте.
c = 2 + ++a; 
alert(c); //ответ: 5
//пример 4. то же, что и во втором варианте.
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

//пример 2.
let a = 2; 
let x = 1 + (a *= 2);
console.log(x) // X = 1 + (("а" прислваивается 2, и они умножаются) = 4) = 1 + 4 =5

//пример 3.
// Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;

const a = 8
const b = 7
const x = (a,b) => {
if (a>=0 && b>=0) {
return y=a-b
} else if(a<=0 && b<=0) {
return y=a*b
} else if(a!==b) {
return y=(a+b)
}
}
console.log(x(a,b))

//пример 4.
// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

const arg1 = 7
const arg2 = 4

const sum2 = (arg1,arg2) => (arg1+arg2)

const minus = (arg1,arg2) => (arg1-arg2)

const multi = (arg1,arg2) => (arg1*arg2)

const divis = (arg1,arg2) => (arg1/arg2)

//пример 5.
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

const mathOperation = (a, b, operation) => {
    switch (operation) {
    case 1:
    return sum2(a,b);
    case 2:
    return minus(a,b);
    case 3:
    return multi(a,b);
    case 4:
    return divis(a,b);
    }
    }
    console.log(mathOperation(arg1, arg2, 1))
    console.log(mathOperation(arg1, arg2, 2))
    console.log(mathOperation(arg1, arg2, 3))
    console.log(mathOperation(arg1, arg2, 4))

//пример 6.
const number = prompt('Введите число') // получили число, записали в number
const numberString = number.toString() // превратили number в строку
const index = numberString.length-1 // узнали индекс последнего элемента в стоке (2) '1 0 7' 3 элемента, последний под инексом 2
const endNumber = number.charAt(index) // достали значение последнего элемента в строке, endNumber = 7

const count = (number , endNumber) => {
switch (endNumber) {
case 1:
return `Ваша сумма в ${number} рубль успешно зачислена.`
case 2:
return `Ваша сумма в ${number} рубля успешно зачислена.`
case 3:
return `Ваша сумма в ${number} рубля успешно зачислена.`
case 4:
return `Ваша сумма в ${number} рубля успешно зачислена.`
default:
return `Ваша сумма в ${number} рублей успешно зачислена.`
}
}
alert(count(number, endNumber))
const sum = (a,b) => a+b

console.log(sum(1,3))