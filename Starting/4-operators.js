console.log("5 == '5':", 5 == '5');         // true
console.log("5 === '5':", 5 === '5');       // false
console.log("5 != '5':", 5 != '5');         // false
console.log("5 !== '5':", 5 !== '5');       // true
console.log("7 > 4:", 7 > 4);               // true
console.log("2 < 3:", 2 < 3);               // true
console.log("5 >= 5:", 5 >= 5);             // true
console.log("3 <= 2:", 3 <= 2);             // false


console.log("true && true:", true && true);         // true
console.log("true && false:", true && false);       // false

console.log("false || true:", false || true);       // true
console.log("false || false:", false || false);     // false

console.log("!true:", !true);                       // false
console.log("!false:", !false);                     // true


let yas = 20;
let uyruk = "TR";

// Hem yaş 18'den büyük hem vatandaş ise
let secmenMi = yas >= 18 && uyruk === "TR";
console.log("Seçmen mi?", secmenMi); // true

// Ya yaş küçük ya da uyruk farklı ise
let engelli = yas < 18 || uyruk !== "TR";
console.log("Engelli koşul?", engelli); // false

// Negatifini alma
console.log("Seçmen değil mi?", !secmenMi); // false
