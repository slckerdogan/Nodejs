/* | JS DOM Event Türleri | Açıklama                        |
| -------------------- | ------------------------------- |
| `click`              | Tıklama                         |
| `mouseover`          | Fare üzerine gelince            |
| `keydown`            | Klavyeye basılınca              |
| `submit`             | Form gönderilince               |
| `change`             | Input/select değeri değişince   |
| `focus` / `blur`     | Input odaklanma/çıkma           |
| `load`               | Sayfa tüm içeriğiyle yüklenince |
| `scroll`             | Sayfa kaydırılınca              |
| `resize`             | Ekran boyutu değişince          |
 */


/* Node.js EventEmitter ile Event Kullanımı
    Node.js'de kendi olaylarımızı yaratmak için EventEmitter kullanılır.
    Kendi Event Sistemin gibi düşünebilirsin:
    on() ile olayı dinlersin
    emit() ile olayı tetiklersin
    once() ile olayı sadece 1 kez dinlersin
    removeListener() ve off() ile Listener kaldırmayı sağlarsın
    listenerCount() ie aktif dinleyici sayısını gösterirsin
    setMaxListeners(n) ile maksimum dinleyici sınırı koyarsın
    getMaxListeners() ile mevcut dinleyici limitini kullanıcıya verirsin
    listeners() ile olayın fonksiyonlarını listelersin
    rawListeners() ile once() da dahil, orijinal fonksiyonları dönersin
    eventNames() ile tanımlı tüm olay adlarını gösterirsin


Node.js EventEmitter Kullanım Alanları:
    1.Chat uygulamaları
    2.Sunucu olayları (login, logout, error)
    3.Reaktif uygulamalar
    4.Dosya okuma/bitiş tetikleme 
*/

//! 1. EventEmitter sınıfını içe aktar
const EventEmitter = require("events");

//! 2. Yeni bir event nesnesi oluştur
const myEmitter = new EventEmitter();

//! 3. Olay tanımla (listener)
myEmitter.on("selamla", (isim) => {
  console.log(`Merhaba ${isim}, event tetiklendi!`);
});

myEmitter.on("topla", (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
});

myEmitter.on("giris", () => {
  console.log("Kullanıcı giriş yaptı");
});

//! 4. Olayları tetikle
myEmitter.emit("selamla", "Ayşe");
myEmitter.emit("topla", 4, 7);
myEmitter.emit("giris");

//!5. Olayı sadece 1 kez dinle
myEmitter.once('birKez', () => {
  console.log('Bu olay sadece 1 kez çalışır');
});

myEmitter.emit('birKez'); //! çalışır
myEmitter.emit('birKez'); //! çalışmaz

//! 6. Olay dinleyicisini kaldır
function selamla() {
  console.log('Selam!');
}
myEmitter.on('selam', selamla);
myEmitter.removeListener('selam', selamla);
//! ya da Node 10+ için:
//! myEmitter.off('selam', selamla);
myEmitter.emit('selam'); //! çalışmaz


//!7. Aktif dinleyici sayısını göster
function test() {}
myEmitter.on('olay', test);
console.log(myEmitter.listenerCount('olay')); //! 1


//!8. Olayın fonksiyonlarını listele
function birisi() {
  console.log('Dinleyici');
}
myEmitter.on('dinle', birisi);
console.log(myEmitter.listeners('dinle')); //! [ [Function: birisi] ]

//!9. Tanımlı tüm olay adlarını göster
myEmitter.on('bir', () => {});
myEmitter.on('iki', () => {});
console.log(myEmitter.eventNames()); //! [ 'bir', 'iki' ]


/* | Yöntem                                | Açıklama                                    |
| ------------------------------------- | ------------------------------------------- |
| `on(event, fn)`                       | Olayı sürekli dinler                        |
| `once(event, fn)`                     | Olayı sadece 1 kez dinler                   |
| `emit(event, ...args)`                | Olayı tetikler                              |
| `removeListener(event, fn)` / `off()` | Dinleyici siler                             |
| `listenerCount(event)`                | Kaç dinleyici var gösterir                  |
| `setMaxListeners(n)`                  | Maksimum dinleyici sınırı belirler          |
| `getMaxListeners()`                   | Mevcut sınırı gösterir                      |
| `listeners(event)`                    | Olay dinleyicilerini listeler               |
| `rawListeners(event)`                 | `once()` dahil orijinal fonksiyonları döner |
| `eventNames()`                        | Tüm tanımlı olay adlarını verir             |
  `removeAllListeners()`                | Tüm dinleyicileri kaldırır                  |   
 */
