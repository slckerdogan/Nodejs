

//* 1. Temel Yapı: /.../ ve test() kullanımı


const regex = /cat/;
console.log(regex.test("I have a cat")); // true

//* `/cat/` → "cat" kelimesini içeriyor mu diye kontrol eder. `test()` metodu boolean döner.


//* 2. Karakter Sınıfları (Character Classes)

    //a. \[abc] — a, b veya c karakterlerinden biri

const regex1 = /[aeiou]/;
console.log(regex1.test("sky"));  // false
console.log(regex1.test("sun"));  // true

    //b. \[^abc] — a, b, c dışındaki karakterler

const regex2 = /[^aeiou]/;
console.log(regex2.test("aei")); // false
console.log(regex2.test("xyz")); // true

//* 3. Nokta (.) — Herhangi bir karakter (yeni satır hariç)

const regex3 = /c.t/;
console.log(regex3.test("cat")); // true
console.log(regex3.test("cut")); // true
console.log(regex3.test("coat")); // false

//*4. Tekrar Operatörleri

    //a. \* — 0 veya daha fazla tekrar

const regex4 = /lo*/;
console.log("looop".match(regex4)); // looo

    //b. + — 1 veya daha fazla tekrar**

const regex5 = /lo+/;
console.log("look".match(regex5)); // loo

    //c. ? — 0 veya 1 tekrar (isteğe bağlı)

const regex6 = /colou?r/;
console.log(regex6.test("color"));  // true
console.log(regex6.test("colour")); // true

    //d. {n}, {n,}, {n,m} — Belirli tekrar sayıları

const regex7 = /a{2}/;
console.log("baad".match(regex7)); // aa

const regex8 = /a{2,4}/;
console.log("baaaaad".match(regex8)); // aaaa

//*5. Baş ve Son Sınırları: ^ ve \$

const regex9= /^Hello/;
console.log(regex9.test("Hello world")); // true

const regex10 = /world$/;
console.log(regex10.test("Hello world")); // true

//*6. Alternatif: (a|b)

const regex11 = /apple|banana/;
console.log(regex11.test("I like banana")); // true

//*7. Kaçış Karakterleri:

const regex12 = /\d\d\d-\d\d\d/;
console.log("123-456".match(regex12)); // 123-456

//? `\d` → Rakam (0-9), `\D` → Rakam olmayan
//? `\w` → Alfanümerik karakter (harf/sayı/\_), `\W` → Alfanümerik olmayan
//? `\s` → Boşluk karakteri, `\S` → Boşluk olmayan

//*8. Grup Yakalama: (...) ve Non-capturing (?:...)

const regex13 = /(ab)+/;
console.log("ababab".match(regex13)); // ababab

const regex14 = /(?:ab)+/;
console.log("ababab".match(regex14)); // non-capturing ama eşleşir

//*9. Geriye Dönük Referans (Backreference)

const regex15 = /(\w+)\s\1/;
console.log("hello hello".match(regex15)); // hello hello

//*10. Lookahead ve Lookbehind

    //Positive Lookahead (?=...)

const regex16 = /\d(?=px)/;
console.log("5px".match(regex16)); // 5

    //Negative Lookahead (?!...)

const regex17 = /\d(?!px)/;
console.log("5pt".match(regex17)); // 5

    //Positive Lookbehind (?<=...)

const regex18 = /(?<=\$)\d+/;
console.log("$100".match(regex18)); // 100

//*11. Flags (İşaretler)

//? `g` → Global (tüm eşleşmeleri bul)
//? `i` → Büyük-küçük harf duyarsız
//? `m` → Çok satırlı

const regex19 = /cat/gi;
console.log("Cat CAT cat".match(regex19)); // ["Cat", "CAT", "cat"]

//*12. String.match vs RegExp.exec vs RegExp.test

const regex20 = /\d+/g;

console.log("123abc".match(regex20));      // ['123']
console.log(regex20.exec("123abc"));       // ['123']
console.log(regex20.test("abc123"));       // true