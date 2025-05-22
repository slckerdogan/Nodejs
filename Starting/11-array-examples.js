const colors = ['red', 'green', 'blue'];

//? 1. for döngüsü ile dizi elemanlarını yazdırma

console.log('1. for döngüsü ile:');
for (let i = 0; i < colors.length; i++) {
  console.log(i + ' -> ' + colors[i]);
}


//?2. while döngüsü ile dizi gezme
console.log('2. while döngüsü ile:');
let i = 0;
while (i < colors.length) {
  console.log(i + ' -> ' + colors[i]);
  i++;
}

//?3. do...while döngüsü ile dizi gezme
console.log('3. do...while döngüsü ile:');
let j = 0;
do {
  console.log(j + ' -> ' + colors[j]);
  j++;
} while (j < colors.length);


//?4. for...of döngüsü – Dizi elemanlarını dolaşır
console.log('4. for...of döngüsü ile:');
for (const color of colors) {
  console.log(color);
}

//?5. for...in döngüsü – Dizi indekslerini verir
console.log('5. for...in döngüsü ile:');
for (const index in colors) {
  console.log(index + ' -> ' + colors[index]);
}

//?6. Dizi elemanlarının toplamını for ile hesaplama
const numbers = [5, 10, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('6. Toplam:', sum); // 30


//?7. Çift sayıları for döngüsü ile filtreleme
const nums = [1, 2, 3, 4, 5, 6];
const even = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    even.push(nums[i]);
  }
}
console.log('7. Çift sayılar:', even); // [2, 4, 6]


//? 8. Her elemanın karesini alma (for)
const squares = [];

for (let i = 0; i < nums.length; i++) {
  squares.push(nums[i] ** 2);
}
console.log('8. Kareler:', squares); // [1, 4, 9, 16, 25, 36]


//? 9. En büyük sayıyı bulma (for)
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log('9. En büyük sayı:', max); // 6


//? 10. Dizi elemanlarını ters çevirme (for)
console.log('10. Ters yazdırma:');
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}


//? 11. break ile döngüyü durdurma
console.log('11. break örneği:');
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 4) break;
  console.log(nums[i]);
}
// 1, 2, 3

//?12.continue ile belirli elemanı atlama
console.log('12. continue örneği:');
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 3) continue;
  console.log(nums[i]);
}
// 1, 2, 4, 5, 6


//?13.İç içe döngü ile çok boyutlu diziyi yazdırma
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log('13. Çok boyutlu dizi:');
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}


//?14. Dizi kopyalama (for ile)
const original = ['a', 'b', 'c'];
const copy = [];

for (let i = 0; i < original.length; i++) {
  copy.push(original[i]);
}

console.log('14. Kopyalanan dizi:', copy); // ['a', 'b', 'c']


//?15. Eleman sayısını sayma (kaç tane 'a' var?)
const letters = ['a', 'b', 'a', 'c', 'a'];
let count = 0;

for (let i = 0; i < letters.length; i++) {
  if (letters[i] === 'a') {
    count++;
  }
}
console.log("15. 'a' sayısı:", count); // 3