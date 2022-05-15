'use strict'

/*let name = "Bob Todd";
let age ="23";
console.log(`My name is ${name}. I am ${age} years old.`);*/

//ЗАДАНИЯ

let temperature = 17;
alert((9 / 5) * temperature + 32);

let name = "Василий";
let admin = name;
alert(name);

/*
1. Строка прибавляется к сумме числительных (конкатенирует :D ).
2. Строка также соединяется с числами, они не суммируются, так как строка по середине - реагируют с ней.
3. При использования плюса перед строкой, оно меняет тип на число.
4. Так как строка пустая, при знаке "-", прилегающей к ней, она становится числом. Деление на -0 дает результат "-Infinity".
5. Из-за запятой, а не точки, сообщение в ковычках считается текстом, поэтому деление на него даёт NaN (не уверена).
*/
let result1 = 10 + 10 + "10";
let result2 = 10 + "10" + 10;
let result3 = 10 + 10 + +"10";
let result4 = 10 / -"";
let result5 = 10 / +"2,5";
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);