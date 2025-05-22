//!1. İç içe if / mantıksal && || / aritmetik
//*Senaryo: Kullanıcının yaşına ve notuna göre sınıf geçip geçmediğini kontrol et.

let yas = 17;
let not = 85;

if (yas >= 18 || (yas >= 16 && yas <= 18 && not >= 80)) {
  console.log("Sınıfı geçmeye hak kazandı.");
} else if (not >= 70 && not < 80) {
  console.log("Not yeterli ama yaş uygun değil.");
} else {
  console.log("Sınıf tekrarına kaldı.");
}

//! 2. for döngüsü + if / ternary + aritmetik işlemler
//*Senaryo: 1’den 10’a kadar sayıların tek/çift olduğunu ve karesini yaz.

for (let i = 1; i <= 10; i++) {
    let tip = i % 2 === 0 ? "Çift" : "Tek";
    console.log(`Sayı: ${i} (${tip}) | Karesi: ${i ** 2}`);
  }

  
//!3. do…while + iç if + mantıksal operatör
//*Senaryo: Kullanıcı 3 defaya kadar şifreyi doğru girmezse engellenir (örnek sabit şifre).

let sifre = "admin123";
let giris = "";
let hak = 0;

do {
  giris = "admin123"; // sabit örnek, gerçek projede prompt ile alınır
  hak++;
  if (giris === sifre) {
    console.log("Giriş başarılı.");
    break;
  } else {
    console.log(`Yanlış şifre (${hak}. deneme)`);
  }
} while (hak < 3);

if (giris !== sifre) {
  console.log("Hesabınız kilitlendi.");
}


//!4. for + if + && || + matematiksel işlemler
//*Senaryo: 1–20 arasındaki sayılardan hem 3’e hem 5’e bölünenleri yaz ve karesini al.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`Sayı: ${i} hem 3 hem 5'e bölünür. Karesi: ${i * i}`);
    }
  }

  
//!5. if içinde for + ternary
//*Senaryo: Kullanıcı bilgileri kontrol edilir, notları analiz edilir.

let kullanici = {
    ad: "Ali",
    aktif: true,
    notlar: [75, 82, 91]
  };
  
  if (kullanici.aktif) {
    for (let i = 0; i < kullanici.notlar.length; i++) {
      let n = kullanici.notlar[i];
      let durum = n >= 80 ? "Başarılı" : "Geliştirilmeli";
      console.log(`Not ${i + 1}: ${n} → ${durum}`);
    }
  } else {
    console.log("Kullanıcı pasif, not analizi yapılmaz.");
  }

  
//!6. for içinde for + if + mantıksal & matematiksel işlemler
//*Senaryo: 1–5 arası çarpım tablosunu sadece çift sonuçlar için yazdır.

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      let sonuc = i * j;
      if (sonuc % 2 === 0) {
        console.log(`${i} x ${j} = ${sonuc}`);
      }
    }
  }
  