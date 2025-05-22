//*Arrays with functions
const funcArr=[
    function (a,b){
        return a+b;
    }
    ,function (a,b){
        return a-b;
    }
    ,function (a,b){
        return a*b;
    }

]

//*Array Example

for (let i=0;i<funcArr.length;i++){
    console.log(funcArr[i](2,3));
}

const arr=[1,2,3,4,5,6,7,8,9,10];

for (let i=0;i<arr.length;i++){
    arr[i]=arr[i]**2;
}
console.log(arr);



const fruits = ['apple', 'banana', 'cherry'];

//!1-Dizi Olusturmak
console.log('1. Dizi:', fruits); // ['apple', 'banana', 'cherry']


//! 2. length – Dizi uzunluğu
console.log('2. Uzunluk:', fruits.length); // 3

//!3. push() – Dizi sonuna eleman ekler
fruits.push('orange');
console.log('3. push:', fruits); // ['apple', 'banana', 'cherry', 'orange']

//!4. pop() – Dizi sonundan eleman çıkarır
const removed = fruits.pop();
console.log('4. pop:', fruits); // ['apple', 'banana', 'cherry']
console.log('Çıkarılan:', removed); // orange

//!5. unshift() – Dizi başına eleman ekler
fruits.unshift('kiwi');
console.log('5. unshift:', fruits); // ['kiwi', 'apple', 'banana', 'cherry']

//!6. shift() – Dizi başından eleman çıkarır
const first = fruits.shift();
console.log('6. shift:', fruits); // ['apple', 'banana', 'cherry']
console.log('Çıkarılan:', first); // kiwi

//!7. indexOf() –  İlk eşleşen elemanın index'ini verir
console.log('7. indexOf:', fruits.indexOf('banana')); // 1

//!8. includes() – Elemanın dizide olup olmadığını kontrol eder
console.log('8. includes:', fruits.includes('cherry')); // true

//!9. join() – Diziyi birleştirerek string yapar
console.log('9. join:', fruits.join(', ')); // apple, banana, cherry

//!10. slice() – Belirli aralıktaki elemanları alır (orijinali bozmaz)
console.log('10. slice:', fruits.slice(1, 3)); // ['banana', 'cherry']

//!11. splice() – Belirli aralıktaki elemanları siler (orijinali bozar)
fruits.splice(1, 1, 'melon'); // 1. index'teki 1 elemanı sil, yerine 'melon' ekle
console.log('11. splice:', fruits); // ['apple', 'melon', 'cherry']

//!12. forEach() – Her eleman için işlem yapar
console.log('12. forEach:');
fruits.forEach((fruit, index) => {
  console.log(index + ': ' + fruit);
});


//!13. map() – Her elemanı dönüştürerek yeni dizi oluşturur
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('13. map:', upperFruits); // ['APPLE', 'MELON', 'CHERRY']

//!14. filter() – Belirli bir koşula uyan elemanları alır
const longNames = fruits.filter(fruit => fruit.length > 5);
console.log('14. filter:', longNames); // ['banana', 'cherry']

//! 15. find() – İlk uyan elemanı döner
const findFruit = fruits.find(fruit => fruit.startsWith('c'));
console.log('15. find:', findFruit); // cherry

//!16. reduce() – Diziyi tek bir değere indirger
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log('16. reduce:', total); // 10

//!17. sort() – Diziyi sıralar (alfabetik veya sayısal)
const sorted = [...fruits].sort(); // orijinali bozmamak için kopyalandı
console.log('17. sort:', sorted); // alfabetik sırada

//!18. reverse() – Diziyi ters çevirir
const reversed = [...fruits].reverse();
console.log('18. reverse:', reversed);

//!19.flat() – Çok boyutlu diziyi düzleştirir
const nested = [1, 2, [3, 4, [5]]];
console.log('19. flat:', nested.flat(2)); // [1, 2, 3, 4, 5]

//!20.findIndex() – Belirli bir koşula uyan ilk elemanın indeksini döner
console.log('20. findIndex:', fruits.findIndex(f => f === 'melon')); // 1

//!21.some() – En az bir eleman koşula uyuyorsa true döner
console.log('21. some:', fruits.some(fruit => fruit === 'cherry')); // true

//!22.every() – Tüm elemanlar koşula uyuyorsa true döner
console.log('22. every:', fruits.every(fruit => typeof fruit === 'string')); // true

//!23.fill() – Dizinin tüm elemanlarını değiştirmek
const filled = new Array(4).fill('x');
console.log('23. fill:', filled); // ['x', 'x', 'x', 'x']

//!24. at() – Belirli indeksin değerini verir (negatif de olabilir)
console.log('24. at:', fruits.at(-1)); // cherry (son eleman)

//!25.concat() – Dizileri birleştirir
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log('25. concat() =>', combined); // [1, 2, 3, 4]

//!26.spread (...) – Dizi kopyalama veya birleştirme
const spread1 = [1, 2, 3];
const spread2 = [...spread1];
console.log('26. spread (kopya) =>', spread2); // [1, 2, 3]

const merged = [...spread1, 4, 5];
console.log('26. spread (birleştirme) =>', merged); // [1, 2, 3, 4, 5]

//!27.split() – String → dizi
const text = 'red,green,blue';
const splitColors = text.split(',');
console.log('8. split() =>', splitColors); // ['red', 'green', 'blue']

//!28.lastIndexOf() – Son eşleşen elemanın index'ini verir
const names2 = ['Ali', 'Veli', 'Ali'];
console.log('28. lastIndexOf("Ali") =>', names2.lastIndexOf('Ali')); // 2

//!29. keys() – Dizi indekslerini döner
const keys = fruits.keys();
for (const key of keys) {
  console.log(`29. keys: ${key}`); // 0, 1, 2
}

//!30. entries() – Dizi elemanlarını ve indekslerini döner
const entries = fruits.entries();
for (const [index, value] of entries) {
  console.log(`30. entries: ${index}: ${value}`);
}

//!31.toString() – Dizi → string (, ile)
const arrayToString = [1, 2, 3].toString();
console.log('25. toString() =>', arrayToString); // "1,2,3"

//!32. copyWithin() – Dizi elemanlarını kopyalar (orijinali bozar)
const copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3); // 0. index'e 3. index'ten başla
console.log('32. copyWithin() =>', copyArr); // [4, 5, 3, 4, 5]