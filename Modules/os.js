import os from 'os';

//*Node.js'te yerleşik olarak gelen os (Operating System) modülü, işletim sistemiyle ilgili bilgileri almak için kullanılır. Bu modül sayesinde sistemin CPU yapısı, bellek durumu, platform bilgisi gibi birçok önemli veriye erişebilirsin.

//!arc(); İşlemci mimarisini döner
const arc = os.arch();
console.log("arc",arc)

//!cpus(); Her bir CPU çekirdeği hakkında bilgi verir
const cpus = os.cpus();
console.log("cpus",cpus)

//!freemem(); Boş (kullanılabilir) RAM miktarını bayt cinsinden döner
const freemem = os.freemem();
console.log("freemem",freemem)

//!homedir(); Kullanıcının ana dizinini verir
const homedir = os.homedir();
console.log("homedir",homedir)

//!hostname(); Bilgisayarın hostname'ini döner
const hostname = os.hostname();
console.log("hostname",hostname)

//!networkInterfaces(); Ağ arabirimleri hakkında bilgi döner
const networkInterfaces = os.networkInterfaces();
console.log("networkInterfaces",networkInterfaces)

//!platform(); İşletim sistemi platformunu verir
const platform = os.platform();
console.log("platform",platform)

//!release(); İşletim sistemi versiyonunu döner
const release = os.release();
console.log("release",release)

//!tmpdir(); Geçici dosyaların saklandığı dizini döner
const tmpdir = os.tmpdir();
console.log("tmpdir",tmpdir)

//!totalmem(); Toplam RAM miktarını bayt cinsinden döner
const totalmem = os.totalmem();
console.log("totalmem",totalmem)

//!type(); İşletim sistemi türünü döner
const type = os.type();
console.log("type",type)

//!uptime(); İşletim sisteminin ne kadar süredir çalıştığını döner
const uptime = os.uptime();
console.log("uptime",uptime)

//!userInfo(); Kullanıcı bilgilerini döner
const userInfo = os.userInfo();
console.log("userInfo",userInfo)