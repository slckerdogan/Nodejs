/* Node.js ile görselleri işlemek, boyutlandırmak, filtre uygulamak, yazı eklemek ve daha fazlasını yapmak için Jimp kütüphanesini kullanabilirsiniz. Harici kütüphane olup yükleme gerektirir. Aşağıda, Jimp ile basit bir görsel işleme örneği bulunmaktadır. */
const Jimp = require('jimp');
// Jimp kütüphanesini kullanarak görseli yükleme ve işleme
async function processImage() {
    try {
        // Görseli yükle
        const image = await Jimp.read('input.jpg');
        
        // Görseli boyutlandır
        image.resize(800, Jimp.AUTO);
        
        // Görsele metin ekle
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
        image.print(font, 10, 10, 'Merhaba Jimp!');
        
        // Görseli kaydet
        await image.writeAsync('output.jpg');
        
        console.log('Görsel başarıyla işlendi ve kaydedildi.');
    } catch (error) {
        console.error('Görsel işleme sırasında bir hata oluştu:', error);
    }
}