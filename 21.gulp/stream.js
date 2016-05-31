var fs = require('fs');

fs.createReadStream('index.md').pipe(fs.createWriteStream('i.md'));
fs.createReadStream('index.md').pipe(fs.createWriteStream('i.md'));

console.log('over');