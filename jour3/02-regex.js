const phrase1 = "zorro";

const pattern1 = /[abc]/ ;
// a ou b ou c n'importe où 

console.log(pattern1.test(phrase1))

const pattern2 = /[a-z]/
// contient une lettre de l'alphabet en minuscule n'importe où

const phrase2 = "12345678A";

console.log(pattern2.test(phrase2))

const pattern3 = /[a-zA-Z]/
const pattern4 = /[a-zA-Zéèê]/

// éùèëê

const phrase3 = "é! /";

console.log(pattern4.test(phrase3))

const pattern5 = /[a-zA-Zéèê0-9]/;

console.log(pattern5.test("."))
console.log(pattern5.test("azerty"))
console.log(pattern5.test("http://hello.com"))

// raccourci de plage de caractères

const pattern6 = /./
console.log(pattern6.test("rfozifoz"))
console.log(pattern6.test("1"))
console.log(pattern6.test("!"))
console.log(pattern6.test("é"))

const pattern7 = /[\d]/ ; // \d digit // [0-9]

console.log(pattern7.test("odezhdozehoz"))
console.log(pattern7.test("odezhd5ozehoz"))

const pattern8 = /[\D]/ ; //   [^0-9]
// tout sauf des chiffres

console.log(pattern8.test("1234567"))

// créer un nouveau fichier 03-exo.html
// créer une express régulière la plus strict possible qui va répondre true
// pour les chaines de caractères suivantes

// bonjour
// comment allez vous ?
// 75 rue de Paris


// => zyk => doit répondre false 
