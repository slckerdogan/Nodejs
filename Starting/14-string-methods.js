console.log("=== STRING METOTLARI ===");

const str = "  JavaScript Öğreniyorum  ";

console.log("\n1. length");
console.log("Uzunluk:", str.length);

console.log("\n2. trim / trimStart / trimEnd");
console.log("Trim:", str.trim());
console.log("TrimStart:", str.trimStart());
console.log("TrimEnd:", str.trimEnd());

console.log("\n3. toUpperCase / toLowerCase");
console.log("Büyük harf:", str.toUpperCase());
console.log("Küçük harf:", str.toLowerCase());

console.log("\n4. includes");
console.log("includes('Script'):", str.includes("Script"));

console.log("\n5. startsWith / endsWith");
console.log("startsWith('Java'):", str.trim().startsWith("Java"));
console.log("endsWith('yorum'):", str.trim().endsWith("yorum"));

console.log("\n6. indexOf / lastIndexOf");
console.log("indexOf('a'):", str.indexOf("a"));
console.log("lastIndexOf('a'):", str.lastIndexOf("a"));

console.log("\n7. charAt / charCodeAt");
console.log("charAt(2):", str.charAt(2));
console.log("charCodeAt(2):", str.charCodeAt(2)); // Unicode

console.log("\n8. slice / substring / substr");
console.log("slice(2, 10):", str.slice(2, 10));
console.log("substring(2, 10):", str.substring(2, 10));
console.log("substr(2, 5):", str.substr(2, 5)); // eski, kullanılmaz ama bilinmeli

console.log("\n9. replace / replaceAll");
console.log("replace('JavaScript', 'JS'):", str.replace("JavaScript", "JS"));
console.log("replaceAll(' ', '-'):", str.replaceAll(" ", "-"));

console.log("\n10. split");
console.log("split(' '):", str.trim().split(" "));

console.log("\n11. concat");
console.log("concat:", str.trim().concat(" - Harika!"));

console.log("\n12. repeat");
console.log("repeat(2):", "JS ".repeat(2));

console.log("\n13. padStart / padEnd");
console.log("padStart(20, '*'):", "123".padStart(10, "*"));
console.log("padEnd(10, '.'):", "abc".padEnd(10, "."));

console.log("\n14. match / matchAll / search");
console.log("match:", str.match(/a/g));
console.log("search('Script'):", str.search("Script"));

console.log("\n15. localeCompare");
console.log("'a'.localeCompare('b'):", 'a'.localeCompare('b'));

console.log("\n16. normalize");
console.log("normalize:", "é".normalize("NFD")); // é → e + ´

console.log("\n17. valueOf / toString");
console.log("valueOf:", str.valueOf());
console.log("toString:", str.toString());
