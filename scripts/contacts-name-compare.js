const fs = require('fs');

console.log('comparing contacts name');

const args = process.argv;

if (args.length < 4) {
  console.error('Usage: node contacts-name-compare.js <first list name path> <second list name>');
  process.exit(1);
}

const firstListNamePath = args[2];
const secondListNamePath = args[3]

let firstDataNames = fs.readFileSync(firstListNamePath, 'utf-8');
let secondDataNames = fs.readFileSync(secondListNamePath, 'utf-8');

const firstDataNamesArr = firstDataNames.split('\n')
  .filter(number => number.length);

const secondDataNamesArr = secondDataNames.split('\n')
  .filter(number => number.length);

console.log(`there are ${firstDataNamesArr.length} contacts in the first group and ${secondDataNamesArr.length} in the second group`);

const notInFirst = secondDataNamesArr.filter((element) => !firstDataNamesArr.includes(element));
const notInSecond = firstDataNamesArr.filter((element) => !secondDataNamesArr.includes(element));

console.log(`not in first ${notInFirst}`);
console.log(`not in excel ${notInSecond}`);


