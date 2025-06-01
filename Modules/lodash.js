import _, { isEqual } from 'lodash';

//*Lodash, JavaScript'te veri işleme (özellikle diziler, objeler, fonksiyonlar ve stringler) için kullanılan yardımcı (utility) fonksiyonlar içeren popüler bir kütüphanedir. Kodunuzu daha kısa, okunabilir ve güvenli hâle getirir.

//!isEqual:İki nesne/dizi tam eşit mi kontrol eder
console.log("isEqual Sonuçları")

const object1 = { a: 1, b: 2 };
const object2 = { a: 1, b: 2 };
const object3 = { a: 1, b: 3 };
const object4 = { a: 1, b: 2, c: 3 };

console.log(_.isEqual(object1, object2)); // true
console.log(_.isEqual(object1, object3)); // false
console.log(_.isEqual(object1, object4)); // false
console.log(_.isEqual(object3, object4)); // false


//!isEmpty:Bir nesne/dizi boş mu kontrol eder
console.log("isEmpty Sonuçları")

const emptyObject = {};
const nonEmptyObject = { a: 1 };
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
const emptyString = '';
const nonEmptyString = 'Hello';
const nullValue = null;
const undefinedValue = undefined;
console.log(_.isEmpty(emptyObject)); // true
console.log(_.isEmpty(nonEmptyObject)); // false
console.log(_.isEmpty(emptyArray)); // true
console.log(_.isEmpty(nonEmptyArray)); // false
console.log(_.isEmpty(emptyString)); // true
console.log(_.isEmpty(nonEmptyString)); // false
console.log(_.isEmpty(nullValue)); // true
console.log(_.isEmpty(undefinedValue)); // true



//!sortBy:Bir dizi nesneyi belirli bir alana göre sıralar
console.log("sortBy Sonuçları")

const users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'pebbles ', 'age': 1 },
    { 'user': 'bobby', 'age': 23 }
    ];
const sortedUsers = _.sortBy(users, ['age']);
console.log(sortedUsers);



//!orderBy:Bir dizi nesneyi belirli bir alana göre sıralar ve sıralama yönünü belirtir

console.log("orderBy Sonuçları")
const users2 = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'pebbles ', 'age': 1 },
    { 'user': 'bobby', 'age': 23 }
    ];
const sortedUsers2 = _.orderBy(users2, ['user'], ['desc']);
//* Sıralama yönü: 'asc' (artan) veya 'desc' (azalan)
console.log(sortedUsers2);


//!union:İki veya daha fazla diziyi birleştirir ve tekrar eden elemanları kaldırır

console.log("union Sonuçları")
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [5, 6, 7];
const array4 = [1, 2, 3, 4, 5, 6, 7,8,9,10];
const unionArray = _.union(array1, array2, array3,array4);
console.log(unionArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//!cloneDeep:Bir nesneyi derinlemesine kopyalar

console.log("cloneDeep Sonuçları")
const object5 = { a: 1, b: { c: 2 } };
const object6 = _.cloneDeep(object5);
console.log("CloneDeep ile Oluşan object6: ", object6); // { a: 1, b: { c: 2 } }")
object6.b.c = 3;
console.log("Parametre Değişimi Sonrası Oluşan object6",object6); // { a: 1, b: { c: 3 } }


//!debounce:Bir fonksiyonu belirli bir süre içinde yalnızca bir kez çalıştırır

console.log("debounce Sonuçları")
const debounceFunction = _.debounce(() => {
    console.log('Debounced function executed!');
}, 2000);
//* Bu fonksiyon, 2 saniye içinde yalnızca bir kez çalıştırılacak
debounceFunction();