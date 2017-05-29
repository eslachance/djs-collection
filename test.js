const Collection = require("./index");

const myColl = new Collection();

myColl.set("test", {blah: "heh"});
console.log(myColl.size);