console.log("\n\n=== NUMBER METOTLARI ===");

const num = 123.456;

console.log("\n1. toFixed()");
console.log("toFixed(2):", num.toFixed(2)); // "123.46"

console.log("\n2. toPrecision()");
console.log("toPrecision(4):", num.toPrecision(4)); // "123.5"

console.log("\n3. toExponential()");
console.log("toExponential(2):", num.toExponential(2)); // "1.23e+2"

console.log("\n4. toString()");
console.log("toString:", num.toString());

console.log("\n5. valueOf()");
console.log("valueOf:", num.valueOf());

console.log("\n6. Number.isInteger()");
console.log("isInteger(123.456):", Number.isInteger(num));
console.log("isInteger(100):", Number.isInteger(100));

console.log("\n7. Number.isNaN()");
console.log("isNaN(NaN):", Number.isNaN(NaN));
console.log("isNaN('abc'):", Number.isNaN('abc')); // false (çünkü 'abc' NaN değildir, string'tir)

console.log("\n8. Number.isFinite()");
console.log("isFinite(1000):", Number.isFinite(1000));
console.log("isFinite(Infinity):", Number.isFinite(Infinity));

console.log("\n9. parseInt / parseFloat");
console.log("parseInt('123.456'):", parseInt("123.456")); // 123
console.log("parseFloat('123.456'):", parseFloat("123.456")); // 123.456

console.log("\n10. Number()");
console.log("Number('456'):", Number("456")); // 456
console.log("Number(true):", Number(true)); // 1

console.log("\n11. toLocaleString()");
console.log("toLocaleString (TR):", num.toLocaleString("tr-TR")); // "123,456"
console.log("toLocaleString (US):", num.toLocaleString("en-US")); // "123.456"

console.log("\n12. Math ile Kullanım (Bonus)");
console.log("Math.round:", Math.round(num));   // 123
console.log("Math.floor:", Math.floor(num));   // 123
console.log("Math.ceil:", Math.ceil(num));     // 124
console.log("Math.abs:", Math.abs(-42));       // 42
console.log("Math.pow:", Math.pow(2, 3));      // 8
console.log("Math.sqrt:", Math.sqrt(16));      // 4
console.log("Math.random():", Math.random());  // 0 - 1 arasında rastgele
