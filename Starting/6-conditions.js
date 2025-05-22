//!1-If else

let puan = 75;

if (puan >= 90) {
  console.log("Not: AA - Harika!");
} else if (puan >= 80) {
  console.log("Not: BA - Çok iyi");
} else if (puan >= 70) {
  console.log("Not: BB - İyi");
} else if (puan >= 60) {
  console.log("Not: CB - Orta");
} else {
  console.log("Not: FF - Kaldın");
}

//!2-Ternary Operator

let yas = 20;

let mesaj = yas >= 18 ? "Reşit" : "Reşit değil";
console.log(mesaj); // "Reşit"


//!3-if and boolean

let girisYapildi = true;

if (girisYapildi) {
  console.log("Hoş geldiniz!");
} else {
  console.log("Lütfen giriş yapın.");
}


//!4-Do

do {
    console.log("Bu blok her zaman en az 1 kere çalışır.");
  } while (false);

  
//!5-Do While

let girilenSifre;
let dogruSifre = "1234";
let sayac = 0;

do {
  girilenSifre = "1234"; // normalde prompt kullanılırdı
  sayac++;
  console.log("Şifre denemesi:", sayac);
} while (girilenSifre !== dogruSifre);

console.log("Doğru şifre girildi!");

//!6-For

for (let i = 1; i <= 5; i++) {
    console.log("Sayı:", i);
  }

  //*example for loop
  let toplam = 0;
  for (let i = 1; i <= 10; i++) {
    toplam += i;
  }
  console.log("1-10 arası toplam:", toplam); // 55

  //*for loop with array

  let meyveler = ["Elma", "Muz", "Kiraz"];

for (let i = 0; i < meyveler.length; i++) {
  console.log("Meyve:", meyveler[i]);
}

//!7-For of

for (let meyve of meyveler) {
    console.log("For...of:", meyve);
  }


//!8-For in

let kisi = {
    ad: "Ayşe",
    yas: 30,
    sehir: "İstanbul"
  };
  
  for (let anahtar in kisi) {
    console.log(`${anahtar}: ${kisi[anahtar]}`);
  }
  
//!9-Switch case

// Haftanın günü için bir sayı alalım
let gunNo = 5;

switch (gunNo) {
  case 1:
    console.log("Bugün Pazartesi");
    break;
  case 2:
    console.log("Bugün Salı");
    break;
  case 3:
    console.log("Bugün Çarşamba");
    break;
  case 4:
    console.log("Bugün Perşembe");
    break;
  case 5:
    console.log("Bugün Cuma");
    break;
  case 6:
    console.log("Bugün Cumartesi");
    break;
  case 7:
    console.log("Bugün Pazar");
    break;
  default:
    console.log("Geçersiz gün numarası");
}

//!10-While

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);