const Collection = require("./index");
const myColl = new Collection();

for(let i = 0; i<100;i++) {
  myColl.set(`test${i}`, {testValue: "This is a test Value"});
}

console.log(myColl.size);
console.log(myColl.get("test55").testValue);