// function myArray(arrays) {
//   //   let arrays = [1, 2, 3, 4, 5, 6];
//   for (i = 0; i < arrays.length; i++) {
//     // (const i of arrays)   (i = 0; i < arrays.length; i++)
//     console.log(arrays[i]);
//   }
// }
// myArray([1, 2, 3, 4, 5, 3]);

// // random array

// function RandAr() {
//   for (i = 0; i < 10; i++) {
//     RandAr[i] = Math.random();
//     console.log(RandAr[i]);
//   }
// }
// RandAr();

// // 3 numbers
// function ThreeNum(a, b, c) {
//   let min = 0;
//   if (a < b && a < c) {
//     min = a;
//   } else if (b < a && b < c) {
//     min = b;
//   } else {
//     min = c;
//   }

//   console.log(min);
// }
// ThreeNum(10, 0, 4);

// // 3 numb max

// function ThreeNumMax(a, b, c) {
//   let max = 0;
//   if (a > b && a > c) {
//     max = a;
//   } else if (b > a && b > c) {
//     max = b;
//   } else {
//     max = c;
//     return max;
//   }

//   console.log(max);
// }
// ThreeNumMax(10, 20, 34);

// some numbers max min   not yet((()))
// function ThreeNumMax(a, b, c) {
//   let max = 0;
//   if (a > b && a > c) {
//     max = a;
//   } else if (b > a && b > c) {
//     max = b;
//   } else {
//     max = c;
//   }

//   console.log(max);
// }
// ThreeNumMax(10, 20, 34);

// створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше

// function MinMax() {
//   let min = arguments[0];
//   let max = arguments[0];
//   for (i = 0; i < arguments.length; i++) {
//     if (min > arguments[i]) {
//       min = arguments[i];
//     }
//     if (max < arguments[i]) {
//       max = arguments[i];
//     }
//   }
//   console.log(max);
//   return min;
// }
// let m = MinMax(3, 6, 8, 4, 8, 4, 9, 4, 11, 2);
// console.log(m);

// //  array function

// function arrayFunc() {
//   console.log(array);
// }
// arrayFunc((array = [5, 3, 6, 3, 7, 4, 9]));

// // max of array

// function maxOfArray() {
//   let array = [4, 2, 5, 78, 2, 7, 2, 76, 4];
//   maxN = 0;
//   for (i = 0; i < array.length; i++) {
//     if (maxN < array[i]) {
//       maxN = array[i];
//     }
//   }
//   console.log(maxN);
// }
// maxOfArray();
// // min of array

// function minOfArray() {
//   let array = [51, 32, 25, 78, 12, 43, 23, 43, 53];
//   minN = 100;
//   for (i = 0; i < array.length; i++) {
//     if (minN > array[i]) {
//       minN = array[i];
//     }
//   }
//   console.log(minN);
// }
// minOfArray();

// sum of array

// function sumOfArray() {
//   let array = [51, 32, 25, 78, 12, 43, 23, 43, 3];
//   sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   console.log(sum);
// }
// sumOfArray();

// // mead of array

// function meadOfArray() {
//   let array = [51, 32, 25, 78, 12, 43, 23, 43, 3];
//   sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   let mead = sum / array.length;
//   console.log(mead);
// }
// meadOfArray();

// f lenght

// function arrayLength() {
//   let array = [2, 5, 3, 6, 3, 7, 4, 7];
//   let a = array.length;
//   console.log(array);
//   console.log(array.length);
//   return array.length;
// }
// let a = arrayLength();
// console.log(a);

// number of fields

// function FieldsNumb() {
//   let k = 0;
//   let array = [3, 5, 'g', 'tr', (f = { df: 1, fd: 2, hg: 3 }), 4];
//   for (const field of array) {
//     for (const key in field);
//     {
//       k++;
//     }
//   }
//   console.log(array.length);
//   console.log(k);
// }
// FieldsNumb();

//  sum of arrays

// function arrSum() {
//   let arrayF = [2, 5, 7, 4];
//   let arrayS = [6, 3, 2, 5];
//   let arrayC = [];
//   for (i = 0; i < arrayF.length; i++) {
//     arrayC[i] = arrayF[i] + arrayS[i];
//     console.log(arrayC[i]);
//   }
// }
// arrSum();

//  text to body

// function HelloOwu() {
//   let div = document.createElement('div');
//   div.innerText = 'Hello owu';
//   console.log(div);
//   document.body.appendChild(div);
// }
// HelloOwu();

// some text to

// function textElem(el, text) {
//   let h = document.createElement(el);
//   h.innerText = text;
//   console.log(h);
//   // let point = document.getElementById();
//   document.body.appendChild(h);
// }
// textElem('h1', 'title');

// array of cars  NOT yet!!!

// let cars = [
//   (Fiat = { model: 'Punto' }),
//   (Seat = { model: 'Ibiza' }),
//   (Shkoda = { model: 'Yeti' }),
//   (Reno = { model: 'logan' }),
//   (dodge = { model: 'caliber' }),
// ];
// function carList(array, id) {
//   const dv = document.getElementById(id);

//   for (let i = 0; i < cars.length; i++) {
//     dv.innerHTML = array;
//     const point = document.createElement('arrCars');
//     point.innerText = '${car.model}';

//     ul.appendChild(li);
//   }
//   // block.uppenChild(ul);
// }
// carList(cars, arrCars);

// function carList(array, id) {
//   const block = document.getElementById(id);
//   const ul = document.createElement('ul');
//   for (let i = 0; i < cars.length; i++) {
//     const car = array[i];

//     const li = document.createElement('li');
//     li.innerText = '${car.model}';

//     ul.appendChild(li);
//   }
//   // block.uppenChild(ul);
// }
// carList(cars, arrCars);

// let rules = [
//   {
//     title: 'Перше правило Бійцівського клубу.',
//     body: 'не згадувати про бійцівський клуб.',
//   },
//   {
//     title: 'Друге правило Бійцівського клубу.',
//     body: 'не згадувати ніде про бійцівський клуб.',
//   },
//   {
//     title: 'Третє правило Бійцівського клубу.',
//     body: 'боєць крикнув «стоп», видихався, відключився — бій закінчено',
//   },
//   {
//     title: 'Четверте правило Бійцівського клубу.',
//     body: 'в бою беруть участь лише двоє.',
//   },
//   {
//     title: 'П’яте правило Бійцівського клубу.',
//     body: 'бої йдуть один за іншим.',
//   },
//   {
//     title: 'Шосте правило Бійцівського клубу.',
//     body: 'знімати взуття та сорочки.',
//   },
//   {
//     title: 'Сьоме правило Бійцівського клубу.',
//     body: 'бій триває стільки, скільки потрібно.',
//   },
//   {
//     title: 'Восьме і останнє правило Бійцівського клубу.',
//     body: 'той, хто вперше прийшов в клуб — прийме бій.',
//   },
// ];

// let div = document.createElement('div');
// div.innerText = 'hello owu';
// console.log(div);

// document.body.appendChild(div);
// for (i = 0; i < rules.length; i++) {
//   let div = document.createElement('div');
//   div.innerText = rules[i].title;
//   document.body.appendChild(div);
//   let p = document.createElement('p');
//   p.innerText = rules[i].title;
//   document.body.appendChild(p);
// }

//  ступінь двійки

// function stupin(a) {
//   while (a >= 2) {
//     a = a / 2;
//   }
//   console.log(a);
//   if (a === 2 || a === 1) {
//     console.log('YES');
//   } else {
//     console.log('NO');
//   }
// }

// stupin(1024);

// deep copy

// multilevel array

let array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
console.log(array);
// ->     [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9];
// console.log(array);
// let stringify = JSON.stringify(array);
// console.log(stringify);
// stringify = stringify.split(`[`);
// // stringify = stringify.split(']');
// console.log(stringify);
// // console.log(replaced);
// let parseJ = JSON.parse(stringify);
// console.log(parseJ);

let arrayF = array.flat(3);
console.log(arrayF);
