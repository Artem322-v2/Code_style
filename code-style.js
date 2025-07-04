// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
// function multiply(a,b){
//   return a*b;
// }
// const person ={name:'Alice',age:30};
// if(person.age>18){console.log('Adult');}
// else{console.log('Minor');}

function multiply (a , b) {
  return a * b;
}

const person = {
  name: 'Alice',
  age:30 
};

if (person.age > 18) {
  console.log('Adult');
}
else {console.log('Minor');

}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
// function x(a, b) {
//   let c = a * b;
//   return c;
// }
// let d = x(5, 10);

function multiply (a, b) {
  const result = a * b;
  return result;
}
multiply (5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
let items = ["apple", 'banana', "orange"];
let price = {apple: 1, banana: 2, orange: 3};
const total = price['apple'] + price["banana"] + price.orange;

function calculateTotal(items) {
  return items.reduce(function(total, item) {return total + item.price; }, 0); }

  const items = ['apple', 'banana', 'orange'];
  const price = {apple: 1, banana: 2, orange: 3};

function calculateTotal(items, prices) {
  return items.reduce((total, item) => total + prices[item], 0)
};

const total = calculateTotal(items, price);
console.log(total); // Разбирался с помощью нейросети (знаю тут не сложно, но по началу тупил)

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".

function validateForm (name, email, password) {
  if (!name) {
    return console.log('Ошибка: поле имени не заполнено')
  }

  if (!email.includes('@')) {
    return console.log('Ошибка: неверный email')
  }

  if (!password) {
    return ('Ошибка: поле пароля заполнено не верно')
  }

  console.log('Форма успешно отправлена')
}

validateForm