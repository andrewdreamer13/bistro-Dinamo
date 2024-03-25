// working with time and date
// link to the documentation of luxon instructions: https://moment.github.io/luxon/#/tour


// examples
const data = luxon.DateTime;
const now = data.now();
console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log((data.now().toString().slice(0, 10)).split('-').reverse().join('-'));

console.log(now.plus({ hours: 3, minutes: 2 }).toString());
console.log(now.minus({ days: 7 }).toString().slice(0, 10));
console.log(now.startOf('day').toString());
console.log(now.endOf('hour').toString());