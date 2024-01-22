

const fullNume = "@#Code yahaho";

let firstName = fullNume.slice(0,3);

let lastName = fullNume.slice(4);

console.log(firstName);
console.log(lastName);

let firstChar = fullNume.slice(0,fullNume.indexOf(" "));

let lastChar = fullNume.slice(-1 , fullNume.indexOf(" "));

console.log(firstChar);
console.log(lastChar);