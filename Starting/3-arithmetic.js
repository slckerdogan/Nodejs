let a = 10;
let b = 5;

//!1-ADDITION

let toplam = a + b;
console.log("Toplama:", toplam); // 15


//!2-SUBTRACTION

let fark = a - b;
console.log("Çıkarma:", fark); // 5

//!3-MULTIPLICATION

let carpim = a * b;
console.log("Çarpma:", carpim); // 50

//!4-DIVISION

let bolum = a / b;
console.log("Bölme:", bolum); // 2


//!5-MODULUS

let kalan = a % b;
console.log("Mod (kalan):", kalan); // 0

//!6-EXPONENTIATION

let us = a ** b;
console.log("Üs alma:", us); // 10^5 = 100000


//!7-UNARY

let negatif = -a;
console.log("Negatif:", negatif); // -10

//!8-INCREMENT

let x = 5;
console.log("x:", x);       // 5
console.log("x++:", x++);   // 5 (önce gösterir sonra artırır)
console.log("x sonrası:", x); // 6

let y = 5;
console.log("++y:", ++y);   // 6 (önce artırır sonra gösterir)

//!9-DECREMENT

let z = 5;
console.log("z--:", z--);   // 5
console.log("z sonrası:", z); // 4

let t = 5;
console.log("--t:", --t);   // 4

//!10-MIXED OPERATIONS

let sonuc = (10 + 2) * 3 / 2 - 4 ** 2;
console.log("Karışık işlem sonucu:", sonuc);
// (12 * 3) / 2 - 16 => 36 / 2 - 16 => 18 - 16 => 2
