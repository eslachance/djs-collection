# djs-collection

***__THIS REPOSITORY IS NOW OBSOLETE AND WILL NO LONGER BE UPDATED__***

## Moving to Enmap

`djs-collection-persistent` and `djs-collection` have been merged into a more efficient system that's been renamed *Enmap*.

To get enmap, see [The NPMJS Page](https://www.npmjs.com/package/enmap). 

Updating requires no migration, only a change in code: 

```js
// OLD CODE

const Collection = require("djs-collection");
const myColl = new Collection();

// NEW CODE

const Enmap = require('enmap');
const myColl = new Enmap();
```

## Support

For support join [〈evie.codes〉](https://discord.gg/PhT8scR) and talk to me, 〈evie.codes〉!