const textUtils = require('./textUtils.js');

const text = "przykladowy tekst";

console.log("Tekst z pierwsza wieksza litera:", textUtils.capitalize(text));
console.log("Tekst na wielkie litery:", textUtils.toUpperCase(text));
console.log("Tekst na małe litery:", textUtils.toLowerCase(text));