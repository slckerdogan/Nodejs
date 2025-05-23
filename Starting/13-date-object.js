//!1. Date Oluşturma (Farklı Yöntemler)

// Şu anki tarih ve saat
const now = new Date();
console.log("Şu anki tarih ve saat:", now);

// Belirli bir tarih (Yıl, Ay, Gün) - Aylar 0 tabanlı (0 = Ocak)
const date1 = new Date(2025, 4, 13); // 13 Mayıs 2025
console.log("Belirli tarih (Y, M, D):", date1);

// Tarih + Saat (Yıl, Ay, Gün, Saat, Dakika, Saniye, Milisaniye)
const date2 = new Date(2025, 11, 31, 23, 59, 59, 999);
console.log("Tarih + Saat:", date2);

// ISO 8601 tarih formatı ile (Z: UTC)
const date3 = new Date("2025-05-13T10:30:00Z");
console.log("ISO formatlı tarih:", date3);

// Tarihi timestamp (ms) ile oluşturmak
const date4 = new Date(Date.now());
console.log("Date.now() ile oluşturulan tarih:", date4);

// Timestamp (milisaniye cinsinden sayı)
console.log("Timestamp:", Date.now());

//!2. Tarih Bilgilerini ALMA (get metodları)

const sample = new Date(2025, 4, 13, 15, 45, 30, 123); // 13 Mayıs 2025 15:45:30.123

console.log("Yıl:", sample.getFullYear());         // 2025
console.log("Ay (0-11):", sample.getMonth());      // 4 (Mayıs)
console.log("Gün:", sample.getDate());             // 13
console.log("Haftanın günü (0=PAZ):", sample.getDay()); // 2 (Salı)
console.log("Saat:", sample.getHours());           // 15
console.log("Dakika:", sample.getMinutes());       // 45
console.log("Saniye:", sample.getSeconds());       // 30
console.log("Milisaniye:", sample.getMilliseconds()); // 123
console.log("Unix Timestamp:", sample.getTime());  // milisaniye cinsinden

//!3. Tarih Bilgilerini AYARLAMA (set metodları)

const ayarliTarih = new Date();

ayarliTarih.setFullYear(2030);
ayarliTarih.setMonth(0);         // Ocak
ayarliTarih.setDate(1);
ayarliTarih.setHours(12);
ayarliTarih.setMinutes(30);
ayarliTarih.setSeconds(45);
ayarliTarih.setMilliseconds(789);

console.log("Ayarlanmış tarih:", ayarliTarih.toString());

//!4. Tarihi Formatlama / Yazdırma

const formatTarihi = new Date(2025, 4, 13, 15, 30);

// ISO format
console.log("ISO:", formatTarihi.toISOString());

// toDateString() – Sadece tarih
console.log("Tarih (toDateString):", formatTarihi.toDateString());

// toTimeString() – Sadece saat
console.log("Saat (toTimeString):", formatTarihi.toTimeString());

// Yerel tarih (varsayılan dil)
console.log("Yerel tarih:", formatTarihi.toLocaleDateString());

// Yerel saat
console.log("Yerel saat:", formatTarihi.toLocaleTimeString());

// Yerel tarih - özel format ve dil
console.log(
  "Türkçe formatlı tarih:",
  formatTarihi.toLocaleDateString("tr-TR", {
    weekday: "long", // pazartesi, salı...
    year: "numeric",
    month: "long",   // mayıs
    day: "numeric",
  })
);

// Yerel saat - saat formatı (örneğin İngilizce, 12 saatlik)
console.log(
  "İngilizce saat formatı:",
  formatTarihi.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
);

//!5. Ekstra Bilgiler

// Tarihler arası fark (milisaniye cinsinden)
const d1 = new Date("2025-01-01");
const d2 = new Date("2025-01-10");
const farkMs = d2 - d1;
const farkGun = farkMs / (1000 * 60 * 60 * 24);
console.log("Tarihler arası fark (gün):", farkGun); // 9 gün

// Gelecek tarih hesaplama (şu an + 7 gün)
const now2 = new Date();
now2.setDate(now2.getDate() + 7);
console.log("7 gün sonrası:", now2.toDateString());

