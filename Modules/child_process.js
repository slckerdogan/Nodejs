import child_process from 'node:child_process'; 
//* child_process modülü, Node.js uygulamalarında yeni işlemler oluşturmak için kullanılır. Bu modül, bir uygulamanın başka bir uygulamayı başlatmasına ve onunla iletişim kurmasına olanak tanır. Bu, çok iş parçacıklı uygulamalar oluşturmak veya mevcut uygulamaları genişletmek için yararlıdır.

//!exec(); shell(terminal) komutu çalıştırır, çıktıyı verir

//*Asenkron Olarak Çalıştırmak: Bunun için child_process.exec() fonksiyonu kullanılır.

const execCallback = child_process.exec('node --version', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.error(`stderr: ${stderr}`);
    console.log(`stdout: ${stdout}`);
});

execCallback.on('exit', (code,signal) => {
    console.log(`İşlem tamamlandı. Çıkış kodu: ${code} signal: ${signal}`);
})

//*Senkran Olarak Çalıştırmak: Bunun için child_process.execSync() fonksiyonu kullanılır.
const execSyncCallback = child_process.execSync('node --version').toString();
console.log("execSyncCallback",execSyncCallback)




//!spwan(); : Komutu parçalara ayırarak çalıştırır, büyük çıktılar için daha uygundur. 

//*Asenkron Olarak Çalıştırmak: Bunun için child_process.spawn() fonksiyonu kullanılır.

const spawnCallback = child_process.spawn('node', ['./test.js', '--experimental-modules']);

spawnCallback.stdout.on('data', (stdout) => {
    console.log(`stdout: ${stdout}`);
});

spawnCallback.stderr.on('data', (stderr) => {
    console.error(`stderr: ${stderr}`);
});

spawnCallback.on('close', (code,signal) => {
    console.log(`Çıkış kodu: ${code}`);
    console.log(`Çıkış sinyali: ${signal}`);
});


//*Senkran Olarak Çalıştırmak: Bunun için child_process.spawnSync() fonksiyonu kullanılır.

const spawnSyncCallback = child_process.spawnSync('node', ['./test.js', '--experimental-modules']);
console.log(`stdout: ${spawnSyncCallback.stdout}`);
console.error(`stderr: ${spawnSyncCallback.stderr}`);
console.log(`Çıkış kodu: ${spawnSyncCallback.status}`);
console.log(`Çıkış sinyali: ${spawnSyncCallback.signal}`);



//!fork(); : Yeni bir Node.js iş parçacığı oluşturur. Bu, çok iş parçacıklı uygulamalar için kullanılır.

//*Asenkron Olarak Çalıştırmak: Bunun için child_process.fork() fonksiyonu kullanılır.

const forkCallback = child_process.fork('./test.js', ['--experimental-modules']);
forkCallback.on('message', (message) => {
    console.log(`forkCallback mesajı: ${message}`);
});
forkCallback.on("close",(code,signal) => {
    console.log(`forkCallback kapandı. Çıkış kodu: ${code}`);
    console.log(`forkCallback kapandı. Çıkış sinyali: ${signal}`);
    console.log("İşlem tamamlandı");
});