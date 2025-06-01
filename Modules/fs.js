import fs from 'fs';

//?Node.js'in yerleşik modüllerinden biri olan fs (file system), dosya sistemiyle etkileşim kurmak için kullanılır. Dosya okuma, yazma, silme, klasör oluşturma gibi işlemler fs modülü ile yapılır.

//!readFile(); Dosya okuma işlemi. Hem senkron (Sync) hem de asenkron (Callback veya Promise) versiyonları vardır.

//*Asenkron Olarak Çalıştırmak: Bunun için fs.readFile() fonksiyonu kullanılır. 
const readFileCallback = (err,data)=>{
    if(err){
       throw err;
    }
    console.log("Dosya ASENKRON OLARAK okundu: ",data);
}

fs.readFile("test.txt","utf-8",readFileCallback);


//*Senkron Olarak Çalıştırmak: Bunun için fs.readFileSync() fonksiyonu kullanılır. 
const data = fs.readFileSync("test.txt","utf-8");
console.log("Dosya SENKRON OLARAK okundu: ",data);




//!writeFile(); Dosya yazma işlemi. Hem senkron (Sync) hem de asenkron (Callback veya Promise) versiyonları vardır.

//*Asenkron Olarak Çalıştırmak: Bunun için fs.writeFile() fonksiyonu kullanılır.

const writeFileCallback = (err)=>{
    if(err){
        throw err;
    }
    console.log("Dosya ASENKRON OLARAK yazıldı");
}
fs.writeFile("test1.txt","Bu dosya ASENKRON OLARAK yazıldı teşekkürler",writeFileCallback);

//*Senkron Olarak Çalıştırmak: Bunun için fs.writeFileSync() fonksiyonu kullanılır.
const data1 = fs.writeFileSync("test2.txt","Bu dosya SENKRON OLARAK yazıldı teşekkürler");
console.log("Dosya SENKRON OLARAK yazıldı");




//!appendFile(); Dosyaya ekleme işlemi. Hem senkron (Sync) hem de asenkron (Callback veya Promise) versiyonları vardır.

//*Asenkron Olarak Çalıştırmak: Bunun için fs.appendFile() fonksiyonu kullanılır.
const appendFileCallback = (err)=>{
    if(err){
        throw err;
    }
    console.log("Dosya ASENKRON OLARAK değiştirildi");
}
fs.appendFile("test.txt","\nBu dosya ASENKRON OLARAK değiştirildi teşekkürler",appendFileCallback);

//*Senkron Olarak Çalıştırmak: Bunun için fs.appendFileSync() fonksiyonu kullanılır.
const data2 = fs.appendFileSync("test.txt","\nBu dosya SENKRON OLARAK değiştirildi teşekkürler");




//!open(); Dosya açma işlemi. Hem senkron (Sync) hem de asenkron (Callback veya Promise) versiyonları vardır. Ancak genellikle fs.readFile() ve fs.writeFile() fonksiyonları tercih edilir. Ancak bazı durumlarda dosyayı açmak gerekebilir. Örneğin, dosyayı okuma ve yazma işlemlerini aynı anda yapmak istiyorsanız fs.open() fonksiyonunu kullanabilirsiniz. Bu durumda dosya açılır ve dosya tanıtıcısı döner. Bu tanıtıcı ile dosyayı okuyabilir veya yazabilirsiniz.

//*Asenkron Olarak Çalıştırmak: Bunun için fs.open() fonksiyonu kullanılır.
fs.open("opened-file.txt","w",(err,file)=>{
    if(err){
        throw err;
    }
    console.log("SAVED");
})

//*Senkron Olarak Çalıştırmak: Bunun için fs.openSync() fonksiyonu kullanılır.
const file = fs.openSync("opened-file2.txt","w");
console.log("SAVED2");




//!unlink(); Dosya silme işlemi. Hem senkron (Sync) hem de asenkron (Callback veya Promise) versiyonları vardır.

//*Asenkron Olarak Çalıştırmak: Bunun için fs.unlink() fonksiyonu kullanılır.
const unlinkCallback = (err)=>{
    if(err){
        throw err;
    }
    console.log("Dosya ASENKRON OLARAK silindi");
}
fs.unlink("opened-file.txt",unlinkCallback);


//*Senkron Olarak Çalıştırmak: Bunun için fs.unlinkSync() fonksiyonu kullanılır.
const unlinkData = fs.unlinkSync("opened-file2.txt");
console.log("Dosya SENKRON OLARAK silindi");




//!rename(); Dosya adını değiştirme işlemi. Hem senkron (Sync) hem de asenkron (Callback veya Promise) versiyonları vardır.

//*Asenkron Olarak Çalıştırmak: Bunun için fs.rename() fonksiyonu kullanılır.

const renameCallback = (err)=>{
    if(err){
        throw err;
    }
    console.log("Dosya ASENKRON OLARAK yeniden adlandırıldı");
}
fs.rename("test.txt","renamed.txt",renameCallback);


//*Senkron Olarak Çalıştırmak: Bunun için fs.renameSync() fonksiyonu kullanılır.
const renameData = fs.renameSync("test1.txt","renamed2.txt");
console.log("Dosya SENKRON OLARAK yeniden adlandırıldı");