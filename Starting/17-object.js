console.log("=== 1. NESNE OLUŞTURMA ===");
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  isActive: true
};
console.log(person);
console.log(person.name); // Nokta notasyonu ile erişim
console.log(person["age"]) // Set notasyonu ile erişim


console.log("\n=== 2. KEY-VALUE ERİŞİMİ ===");
// Nokta Notasyonu
console.log("Name:", person.name);
// Köşeli Parantez Notasyonu
console.log("City:", person["city"]);

console.log("\n=== 3. KEY SİLME (delete) ===");
delete person.city;
console.log("city silindikten sonra:", person);

console.log("\n=== 4. SPREAD KULLANIMI & OVERRIDE ===");
const newPerson = {
  ...person,
  age: 35,             // override
  country: "USA"       // yeni key
};
console.log("Yeni Kişi (spread + override):", newPerson);

console.log("\n=== 5. Object.assign() ===");
const base = { name: "Bob", age: 40 };
const extended = Object.assign({}, base, { age: 45, city: "LA" });
console.log("Orijinal:", base);
console.log("Genişletilmiş:", extended);

console.log("\n=== 6. Object.preventExtensions() & isExtensible ===");
const obj1 = { a: 1 };
Object.preventExtensions(obj1);
console.log("Extensible mi:", Object.isExtensible(obj1));
obj1.b = 2; // Eklenemez
console.log("b eklenmeye çalışıldı:", obj1);

console.log("\n=== 7. Object.seal() & isSealed ===");
const obj2 = { a: 1 };
Object.seal(obj2);
console.log("Sealed mi:", Object.isSealed(obj2));
obj2.a = 100;   // değiştirilebilir
delete obj2.a;  // silinemez
obj2.b = 200;   // eklenemez
console.log("Seal sonrası durum:", obj2);

console.log("\n=== 8. Object.freeze() & isFrozen ===");
const obj3 = { a: 1 };
Object.freeze(obj3);
console.log("Frozen mı:", Object.isFrozen(obj3));
obj3.a = 999;   // değiştirilemez
obj3.b = 2;     // eklenemez
delete obj3.a;  // silinemez
console.log("Freeze sonrası durum:", obj3);

console.log("\n=== 9. OBJECT REFERANS KAVRAMI ===");
const original = { value: 10 };
const refCopy = original; // Aynı referans
const shallowCopy = { ...original }; // Spread ile kopya

refCopy.value = 99;
console.log("Orijinal:", original); // 99 (refCopy ile aynı)
console.log("Ref Copy:", refCopy);
console.log("Shallow Copy:", shallowCopy); // 10 (bağımsız)

console.log("\n=== 9b. DEEP COPY (JSON yöntemi) ===");
const deepOriginal = {
  name: "Anna",
  scores: { math: 90, science: 95 }
};
const deepCopy = JSON.parse(JSON.stringify(deepOriginal));
deepCopy.scores.math = 100;

console.log("Deep Original:", deepOriginal);  // math: 90
console.log("Deep Copy:", deepCopy);          // math: 100


//* spread (...) ve Object.assign sadece shallow copy yapar, iç içe objeler yine referansla kalır.
//* delete, sadece nesne içindeki key'i siler. Dizi üzerinde kullanıldığında boş slot oluşturur.
//* Object.preventExtensions: yeni key eklenmesini engeller.
//* Object.seal: yeni key eklenemez, mevcutlar silinemez ama değiştirilebilir.
//* Object.freeze: hiçbir değişiklik yapılamaz. Tam koruma sağlar.

//! Optional Chaining
const user = {
    name: "Ali",
    address: {
      city: "Istanbul",
      zip: {
        code: 34000
      }
    }
  };
  
  // Optional chaining ile nested verilere güvenli erişim
  console.log(user?.address?.city);       // "Istanbul"
  console.log(user?.address?.zip?.code);  // 34000
  console.log(user?.contact?.email);      // undefined (hata vermez)

//*   user?.address?.city → address varsa city'i döner.
//*   user?.contact?.email → contact tanımlı değilse, doğrudan undefined döner, hata fırlatmaz.