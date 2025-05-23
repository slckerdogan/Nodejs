// Math objesi metodları örnekleri

// Mutlak değer
console.log("Math.abs(-10):", Math.abs(-10)); // 10

// Yukarı yuvarlama
console.log("Math.ceil(4.3):", Math.ceil(4.3)); // 5

// Aşağı yuvarlama
console.log("Math.floor(4.7):", Math.floor(4.7)); // 4

// En yakına yuvarlama
console.log("Math.round(4.5):", Math.round(4.5)); // 5

// En büyük değeri bulma
console.log("Math.max(3, 7, 2):", Math.max(3, 7, 2)); // 7

// En küçük değeri bulma
console.log("Math.min(3, 7, 2):", Math.min(3, 7, 2)); // 2

// Üs alma (2 üzeri 3)
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8

// Karekök alma
console.log("Math.sqrt(25):", Math.sqrt(25)); // 5

// Rastgele sayı (0 ile 1 arasında)
console.log("Math.random():", Math.random()); // Örnek: 0.7321

// Sayının sadece tam kısmını alır
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4

// Sayının işaretini belirtir
console.log("Math.sign(-5):", Math.sign(-5)); // -1

// PI sayısı
console.log("Math.PI:", Math.PI); // 3.14159...

// Euler sabiti
console.log("Math.E:", Math.E); // 2.71828...

// Doğal logaritma
console.log("Math.log(1):", Math.log(1)); // 0

// Sinüs
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1

// Kosinüs
console.log("Math.cos(0):", Math.cos(0)); // 1

// Küpkök alma
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3

// e^x (Euler sabiti üzeri x)
console.log("Math.exp(1):", Math.exp(1)); // 2.718281828...

// Doğal logaritma (e tabanında)
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1

// 10 tabanında logaritma
console.log("Math.log10(100):", Math.log10(100)); // 2

// 2 tabanında logaritma
console.log("Math.log2(8):", Math.log2(8)); // 3

// Sinüs (dereceyi radyana çevirerek)
console.log("Math.sin(Math.PI / 6):", Math.sin(Math.PI / 6)); // 0.5

// Kosinüs
console.log("Math.cos(Math.PI):", Math.cos(Math.PI)); // -1

// Tanjant
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // 1

// Arcsin (ters sinüs, sonucu radyan olarak döner)
console.log("Math.asin(0.5):", Math.asin(0.5)); // 0.523 (yaklaşık PI/6)

// Arccos (ters kosinüs)
console.log("Math.acos(1):", Math.acos(1)); // 0

// Arctan (ters tanjant)
console.log("Math.atan(1):", Math.atan(1)); // yaklaşık 0.785 (yaklaşık PI/4)

// İki değerin oranının arktanjantı
console.log("Math.atan2(1, 1):", Math.atan2(1, 1)); // yaklaşık 0.785 (PI/4)

// Sayının tam sayı kısmı (trunc gibi ama negatiflerde fark yaratır)
console.log("Math.fround(1.337):", Math.fround(1.337)); // 1.337 (float32 hassasiyetinde)

// En yakın 32-bit tek hassasiyetli float değeri
console.log("Math.fround(Math.PI):", Math.fround(Math.PI)); // 3.1415927 (float32 versiyonu)
