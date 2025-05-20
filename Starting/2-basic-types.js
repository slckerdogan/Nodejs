//!1-STRING

let isim = "Ali";
console.log(isim);           // "Ali"
console.log(typeof isim);    // "string"

// Değiştirme
isim = "Veli";
console.log(isim);           // "Veli"

// İşlem
let selam = "Merhaba " + isim;
console.log(selam);          // "Merhaba Veli"


//!2-NUMBER

let yas = 30;
console.log(typeof yas);     // "number"

// İşlem
let yeniYas = yas + 5;
console.log(yeniYas);        // 35

// Değiştirme
yas = 40;
console.log(yas);            // 40


//!3-BOOLEAN

let aktif = true;
console.log(typeof aktif);   // "boolean"

// İşlem
if (aktif) {
  console.log("Kullanıcı aktif.");
}

// Değiştirme
aktif = false;
console.log(aktif);          // false

//!4-UNDEFINED

let x;
console.log(typeof x);       // "undefined"
console.log(x);              // undefined

x = 10;
console.log(x);              // 10


//!5-NULL
let veri = null;
console.log(typeof veri);    // "object" (JavaScript’in eski bir hatası)

// Değiştirme
veri = "tamamlandı";
console.log(veri);           // "tamamlandı"


//!6-OBJECT
let kisi = {
    ad: "Ayşe",
    yas: 28
  };
  console.log(typeof kisi);    // "object"
  console.log(kisi.ad);        // "Ayşe"
  
  // Değiştirme
  kisi.yas = 30;
  console.log(kisi.yas);       // 30

  
//!7-ARRAY

let sayilar = [1, 2, 3];
console.log(typeof sayilar); // "object"
console.log(Array.isArray(sayilar)); // true

// Ekleme
sayilar.push(4);
console.log(sayilar);        // [1, 2, 3, 4]

// Değiştirme
sayilar[0] = 10;
console.log(sayilar);        // [10, 2, 3, 4]


//!8-FUNCTION

function selamla() {
    return "Merhaba!";
  }
  console.log(typeof selamla); // "function"
  console.log(selamla());      // "Merhaba!"