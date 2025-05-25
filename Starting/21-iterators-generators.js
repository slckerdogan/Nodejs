/* 1. Iterator (Yineleyici) Nedir?
Bir iterator, üzerinde next() metodu olan ve her çağrıldığında { value, done } nesnesi döndüren bir objedir.

value: Dönülen değeri ifade eder.
done: İşlemin bitip bitmediğini belirtir (true veya false). */

//! Açıklamalı Iterator Fonksiyonu
function myIterator(array) {
  let index = 0;

  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

//! Kullanım
const numbers = [10, 20, 30];
const iterator = myIterator(numbers);

console.log(iterator.next()); //! { value: 10, done: false }
console.log(iterator.next()); //! { value: 20, done: false }
console.log(iterator.next()); //! { value: 30, done: false }
console.log(iterator.next()); //! { value: undefined, done: true }


/* 2. Generator (Üretici Fonksiyon) Nedir?
Bir generator fonksiyon, function* sözcüğü ile tanımlanır ve yield anahtar kelimesiyle her çağrıldığında yürütülmesini durdurur. next() metodu çağrıldığında yürütme kaldığı yerden devam eder. */

// Generator tanımı
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

//! Kullanım
const gen = numberGenerator();

console.log(gen.next()); //! { value: 1, done: false }
console.log(gen.next()); //! { value: 2, done: false }
console.log(gen.next()); //! { value: 3, done: false }
console.log(gen.next()); //! { value: undefined, done: true }

/* Neden Kullanılır?
Iterator: Kontrol tamamen sizde. Nerede başlayıp nerede duracağını siz belirlersiniz.
Generator: Daha kısa ve okunabilir yazım. İçinde asenkron yapı kurmak da mümkün (async function* ile). */