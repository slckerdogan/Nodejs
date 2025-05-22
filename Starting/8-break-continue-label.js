// 1. break örneği: sayı 5 olunca döngü durur
console.log("Break örneği:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Sayı 5, döngü kırıldı.");
    break;
  }
  console.log("Sayı:", i);
}

console.log("\n----------------------\n");

// 2. continue örneği: çift sayılar atlanır
console.log("Continue örneği:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // çift sayıları atla
  }
  console.log("Tek sayı:", i);
}

console.log("\n----------------------\n");

// 3. label + break örneği: iç döngüden değil dış döngüden çık
console.log("Label + break örneği:");
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log(`i=${i}, j=${j} -> dış döngü kırıldı`);
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}


console.log("1. while + break örneği:");
let i = 1;
while (i <= 10) {
  if (i === 6) {
    console.log("i=6, döngü kırıldı.");
    break;
  }
  console.log("i:", i);
  i++;
}

console.log("\n----------------------\n");

console.log("2. while + continue örneği:");
let j = 0;
while (j < 10) {
  j++;
  if (j % 2 === 0) {
    continue; // çift sayıları atla
  }
  console.log("Tek sayı:", j);
}

console.log("\n----------------------\n");

console.log("3. do...while + break örneği:");
let k = 1;
do {
  if (k > 5) {
    console.log("k>5 olduğu için döngü kırıldı.");
    break;
  }
  console.log("k:", k);
  k++;
} while (true); // sonsuz gibi görünse de break ile durdurulur

console.log("\n----------------------\n");

console.log("4. Label + break ile iç içe do...while:");
let x = 1;
outer: do {
  let y = 1;
  do {
    if (x === 2 && y === 2) {
      console.log(`x=${x}, y=${y} => dış döngü kırıldı`);
      break outer;
    }
    console.log(`x=${x}, y=${y}`);
    y++;
  } while (y <= 3);
  x++;
} while (x <= 3);
