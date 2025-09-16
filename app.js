// ==============================
// Oppgave 1: Areal av sirkel
// ==============================
function arealSirkel(radius) {
  return Math.PI * radius * radius;
}

console.log("Arealet til sirkel med radius 24 er:", arealSirkel(24));
console.log("Arealet til sirkel med radius 32 er:", arealSirkel(32));


// ==============================
// Oppgave 2: Volum av kule
// ==============================
function volumKule(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log("Volumet til kule med radius 11 er:", volumKule(11));
console.log("Volumet til kule med radius 21 er:", volumKule(21));


// ==============================
// Oppgave 3: Navn og alder
// ==============================
function sjekkAlder(navn, alder) {
  if (alder < 30) {
    console.log(`Hei ${navn}, du er ung!`);
  } else {
    console.log(`${navn}, du er gammel!`);
  }
}

sjekkAlder("Ken", 19);
sjekkAlder("Ole", 45);


// ==============================
// Oppgave 4a: Kvadrat av tall
// ==============================
function kvadrat(tall) {
  return tall * tall;
}

console.log("Kvadratet av 5 er", kvadrat(5));
console.log("Kvadratet av 12 er", kvadrat(12));


// Oppgave 4b: Areal av trapes
function arealTrapes(a, b, h) {
  return ((a + b) * h) / 2;
}

console.log("Areal av trapes med a=5, b=7, h=4 er:", arealTrapes(5, 7, 4));


// ==============================
// Oppgave 5a: Bytte tall
// ==============================
let tall1 = 10;
let tall2 = 20;

function byttTall() {
  let temp = tall1;
  tall1 = tall2;
  tall2 = temp;
}

console.log("Før bytte: tall1 =", tall1, "tall2 =", tall2);
byttTall();
console.log("Etter bytte: tall1 =", tall1, "tall2 =", tall2);


// ==============================
// Oppgave 5b: Mellom to tall
// ==============================
function mellom(x, y, z) {
  return x > y && x < z;
}

console.log("Ligger 5 mellom 2 og 10?", mellom(5, 2, 10));
console.log("Ligger 15 mellom 2 og 10?", mellom(15, 2, 10));


// ==============================
// Oppgave 5c: Primtall
// ==============================
function erPrimtall(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("Er 7 et primtall?", erPrimtall(7));
console.log("Er 12 et primtall?", erPrimtall(12));


// ==============================
// Oppgave 5d: Palindrom
// ==============================
function erPalindrom(tekst) {
  tekst = tekst.toLowerCase();
  let reversert = tekst.split("").reverse().join("");
  return tekst === reversert;
}

console.log("Er 'otto' et palindrom?", erPalindrom("otto"));
console.log("Er 'heis' et palindrom?", erPalindrom("heis"));
