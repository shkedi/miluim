const fs = require('fs');

console.log('comparing contacts list');

const args = process.argv;

if (args.length < 4) {
  console.error('Usage: node contacts-list-compare.js <whatsapp contact list path> <excel contacts list path>');
  process.exit(1);
}

const whatsAppContactsListPath = args[2];
const excelContactsListPath = args[3]

const knownContacts = {
  'You': '0545866235',
  'מילואים.דובי': '0546800407',
  'מילואים.ראובן': '0535255033'
};


let whatsAppData = fs.readFileSync(whatsAppContactsListPath, 'utf-8');
let excelData = fs.readFileSync(excelContactsListPath, 'utf-8');
Object.entries(knownContacts).forEach(([key, value]) => {
  whatsAppData = whatsAppData.replace(key, value);
});

const whatsAppContacts = whatsAppData.split(',')
  .map(number => number.replaceAll('+972', '0'))
  .map(number => number.replace(/['\n'\s-]/g,''));

const excelContacts = excelData.split('\n')
  .filter(number => number.length)
  .map(number => number.replace(/[\s-]/g,''));

console.log(`there are ${whatsAppContacts.length} contacts in whatsApp group and ${excelContacts.length} in excel`);;

const notInWhatsApp = excelContacts.filter((element) => !whatsAppContacts.includes(element));
const notInExcel = whatsAppContacts.filter((element) => !excelContacts.includes(element));

console.log(`not in whatsApp ${notInWhatsApp}`);
console.log(`not in excel ${notInExcel}`);


