/*
Map Veri Yapısı
    Map, anahtar-değer çiftlerinden oluşan sıralı bir koleksiyon sunar. Anahtarlar herhangi bir türde olabilir, ve her anahtar bir değere karşılık gelir.

Map Metodları:
    set(key, value): Bir anahtar-değer çifti ekler veya mevcutsa günceller.

    get(key): Belirtilen anahtara karşılık gelen değeri döndürür.

    has(key): Belirtilen anahtarın Map içinde olup olmadığını kontrol eder.

    delete(key): Belirtilen anahtarı ve değerini siler.

    clear(): Map'i tamamen temizler (tüm anahtar-değer çiftlerini siler).

    size: Map içindeki öğe sayısını döndürür.

    keys(): Anahtarların bir iterator'ını döndürür.

    values(): Değerlerin bir iterator'ını döndürür.

    entries(): Anahtar-değer çiftlerinin bir iterator'ını döndürür.

    forEach(callback): Map'deki her bir öğe için callback fonksiyonu çalıştırır. 
*/

//! Map örneği
let map = new Map();

//! set: Anahtar-değer çifti ekliyoruz
map.set('name', 'John');
map.set('age', 30);

//! get: Anahtarın değerini alıyoruz
console.log(map.get('name')); //! John

//! has: Anahtarın olup olmadığını kontrol ediyoruz
console.log(map.has('age')); //! true
console.log(map.has('gender')); //! false

//! delete: Anahtarı siliyoruz
map.delete('age');
console.log(map.has('age')); //! false

//! size: Map'in büyüklüğünü alıyoruz
console.log(map.size); //! 1

//! keys, values, entries: Iterator'lar ile gezinme
for (let key of map.keys()) {
  console.log(key); //! name
}

for (let value of map.values()) {
  console.log(value); //! John
}

for (let entry of map.entries()) {
  console.log(entry); //! ['name', 'John']
}

//! forEach: Callback fonksiyonu ile gezinme
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//! clear: Tüm öğeleri temizliyoruz
map.clear();
console.log(map.size); //! 0
