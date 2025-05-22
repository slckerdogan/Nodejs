// 1. Normal Fonksiyon: Sayının karesini alır
function kareAl(sayi=7) {  //eğer sayı yerine bir değer verilmezse varsayılan olarak 7 alır
  return sayi * sayi;
}

// 2. Arrow Function: Sayının faktöriyelini hesaplar
const faktoriyel = (sayi) => {
  if (sayi < 0) return -1;
  if (sayi === 0 || sayi === 1) return 1;

  let sonuc = 1;
  for (let i = 2; i <= sayi; i++) {
    sonuc *= i;
  }
  return sonuc;
};

// 3. Değişkene tanımlı fonksiyon (function expression): Asal mı kontrol eder
const asalMi = function(sayi) {
  if (sayi <= 1) return false;
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) return false;
  }
  return true;
};

// Test Değerleri
let sayi = 5;

console.log("Sayı:", sayi);
console.log("Karesi:", kareAl(sayi));
console.log("Faktöriyeli:", faktoriyel(sayi));
console.log("Asal mı?:", asalMi(sayi) ? "Evet" : "Hayır");


//Arguments

function test(x){
  console.log(arguments); //arguments ile fonksiyona gönderilen tüm argümanları alır

}

test(1,2,3,4,5); // [1,2,3,4,5]


//Spread Operatoru ile Arguments Kullanımı

function test(...x){
  console.log(x); //spread ile fonksiyona gönderilen tüm argümanları alır

}

test(1,2,3); // [1,2,3,4,5]

//Recursive Fonksiyonlar
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci 5:", fibonacci(5)); // 5. Fibonacci sayısı