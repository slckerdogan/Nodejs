console.log("=== setTimeout ve setInterval ===");

// 1. setTimeout → Belirli bir süre sonra 1 kez çalışır
console.log("\n1. setTimeout");

const timeoutId = setTimeout(() => {
  console.log("setTimeout → 2 saniye sonra çalıştı!");
}, 2000); // 2000 ms = 2 saniye

// 2. clearTimeout → setTimeout'u iptal et
// Not: Aşağıdaki satır aktif edilirse setTimeout çalışmaz!
// clearTimeout(timeoutId); 

// 3. setInterval → Belirli aralıklarla tekrar çalışır
console.log("\n2. setInterval");

let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(`setInterval → ${counter}. kez çalıştı`);
  
  // 5 kereden sonra durdur
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("setInterval → Durduruldu (clearInterval)");
  }
}, 1000); // 1 saniyede bir tekrar eder

// 4. Parametre gönderimi (setTimeout içinde)
console.log("\n3. setTimeout ile parametre gönderimi");

function greet(name) {
  console.log(`Merhaba, ${name}!`);
}
setTimeout(greet, 1500, "Ayşe");

// 5. setInterval içinde Date ile saat gösterimi
console.log("\n4. Saat Gösterimi (interval + Date)");

const clockInterval = setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  console.log("Şu an saat:", time);

  // 3 kez göster ve durdur
  if (--showTimes === 0) {
    clearInterval(clockInterval);
    console.log("Saat gösterimi durduruldu.");
  }
}, 1000);

let showTimes = 3; // sadece 3 kez göster

// 6. Zero delay (setTimeout(..., 0))
console.log("\n5. setTimeout(..., 0) nedir?");
setTimeout(() => {
  console.log("0 ms'lik setTimeout en sona atılır!");
}, 0);

console.log("Bu satır setTimeout(0) ile yazılandan önce gelir!");
