//!1-STRING

let sayi = 123;
let mantik = true;
let dizi = [1, 2, 3];

console.log("String(sayi):", String(sayi));       // "123"
console.log("String(mantik):", String(mantik));   // "true"
console.log("String(dizi):", String(dizi));       // "1,2,3"
console.log("typeof:", typeof String(sayi));      // string

console.log("sayi.toString():", sayi.toString()); // "123"


//!2-NUMBER

let str1 = "456";
let bool1 = false;
let bos = "";
let tarih = new Date();

console.log("Number(str1):", Number(str1));     // 456
console.log("Number(bool1):", Number(bool1));   // 0
console.log("Number(bos):", Number(bos));       // 0
console.log("Number(tarih):", Number(tarih));   // zaman damgası (timestamp)
console.log("typeof:", typeof Number(str1));    // number

let karisik = "123.45abc";

console.log("parseInt:", parseInt(karisik));    // 123
console.log("parseFloat:", parseFloat(karisik));// 123.45


//!3-BOOLEAN

console.log("Boolean(0):", Boolean(0));           // false
console.log("Boolean(''):", Boolean(""));         // false
console.log("Boolean('merhaba'):", Boolean("merhaba")); // true
console.log("Boolean(123):", Boolean(123));       // true
console.log("Boolean(null):", Boolean(null));     // false

//!4-TYPE COERCION

console.log("5" + 3);       // "53"  (string + number → string)
console.log("5" - 3);       // 2     (string - number → number)
console.log(true + 1);      // 2     (true → 1)
console.log(false + "5");   // "false5"
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN

//!5-TYPEOF

let veri = "abc";
console.log("typeof veri:", typeof veri); // string

veri = 42;
console.log("typeof veri:", typeof veri); // number

veri = true;
console.log("typeof veri:", typeof veri); // boolean

veri = null;
console.log("typeof veri:", typeof veri); // object (JS hatası)

veri = undefined;
console.log("typeof veri:", typeof veri); // undefined

veri = [1, 2, 3];
console.log("typeof veri:", typeof veri); // object

veri = function() {};
console.log("typeof veri:", typeof veri); // function
