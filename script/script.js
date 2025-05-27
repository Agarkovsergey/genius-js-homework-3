// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }
// console.log(checkAge(19));
// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }
// console.log(checkAge(12));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }

// const res = min(2, 4);
// console.log(res);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// const showAgree = () => {
//   alert('Ви погодились.');
// };

// const showDisAgree = () => {
//   alert('Ви скасували виконання.');
// };

// ask('Ви згодні?', showAgree, showDisAgree);
