// 1 task

// function delay(ms) {
//   setTimeout(resolve, ms);
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));



// function delay(ms) {
//   return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//   });
// }

// document.getElementById('startButton').addEventListener('click', () => {
//   delay(3000).then(() => alert('Выполнилось через 3 секунды'));
// });







// 2 task


// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);


// document.getElementById('runButton').addEventListener('click', () => {
//   let promise = new Promise(function(resolve, reject) {
//       resolve(1);

//       setTimeout(() => resolve(2), 1000);
//   });

//   promise.then(result => {
//       document.getElementById('output').innerText = 'Результат: ' + result;
//   });
// });








// 3 task


// promise.then(f1).catch(f2);

// promise.then(f1, f2);

// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя 
// одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// они ведут себя по-разному в некоторых обстоятельствах

// promise.then(f1).catch(f2); обрабатывает ошибки как промиса, так и возникающие внутри f1
// promise.then(f1, f2); обрабатывает только ошибки промиса, не обрабатывая ошибки внутри f1