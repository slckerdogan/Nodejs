// var ile tanımlama
var isim = "Ali";
console.log(isim); // Ali
isim = "Veli"; // Değiştirilebilir
console.log(isim); // Veli

// let ile tanımlama
let yas = 25;
console.log(yas); // 25
yas = 30; // Değiştirilebilir
console.log(yas); // 30

// const ile tanımlama
const sehir = "Ankara";
console.log(sehir); // Ankara
// sehir = "İzmir"; // Hata verir: const ile tanımlanan değişken değiştirilemez

// Ancak const ile tanımlanan bir dizi veya nesne değiştirilebilir (referansı sabittir)
const meyveler = ["elma", "muz"];
meyveler.push("çilek");
console.log(meyveler); // ["elma", "muz", "çilek"]
