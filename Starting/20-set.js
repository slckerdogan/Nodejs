/* 
Set Veri Yapısı
    Set, tekrarlanan değerleri kabul etmeyen ve sırasını koruyan bir koleksiyondur. Set'e eklenen her öğe benzersizdir.

Set Metodları:
    add(value): Bir öğe ekler. Eğer öğe zaten varsa, ekleme işlemi yapılmaz.

    has(value): Belirtilen öğe Set içinde var mı diye kontrol eder.

    delete(value): Belirtilen öğeyi siler.

    clear(): Set'i tamamen temizler (tüm öğeleri siler).

    size: Set içindeki öğe sayısını döndürür.

    values(): Set'teki öğelerin bir iterator'ını döndürür.

    keys(): Set için values() ile aynı işlevi görür (anahtarları döndürür).

    entries(): Set için, öğeleri [value, value] şeklinde döndüren bir iterator sağlar.

    forEach(callback): Set'teki her öğe için callback fonksiyonu çalıştırır. 
*/

//! Set örneği
let set = new Set();

//! add: Öğeler ekliyoruz
set.add(1);
set.add(2);
set.add(3);
set.add(2); //! 2 tekrar edemez, eklenmez

//! has: Öğenin olup olmadığını kontrol ediyoruz
console.log(set.has(2)); //! true
console.log(set.has(4)); //! false

//! delete: Öğeyi siliyoruz
set.delete(2);
console.log(set.has(2)); //! false

//! size: Set'in büyüklüğünü alıyoruz
console.log(set.size); //! 2

//! values: Set'teki öğeleri döndüren iterator
for (let value of set.values()) {
  console.log(value); //! 1, 3
}

//! keys: Set'teki anahtarları döndürür (Set olduğu için values ile aynı işlevi görür)
for (let key of set.keys()) {
  console.log(key); //! 1, 3
}

//! entries: Set'teki öğeleri [value, value] şeklinde döndürür
for (let entry of set.entries()) {
  console.log(entry); //! [1, 1], [3, 3]
}

//! forEach: Callback fonksiyonu ile Set'e gezinti yapıyoruz
set.forEach((value) => {
  console.log(value); //! 1, 3
});

//! clear: Set'i temizliyoruz
set.clear();
console.log(set.size); //! 0
