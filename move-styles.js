const fs = require('fs');
const path = require('path');

var esmDir = __dirname + '/dist/esm/src/styles';
var cjsDir = __dirname + '/dist/cjs/src/styles';
var originDir = __dirname + '/src/styles';

fs.mkdir(esmDir, console.log)
fs.mkdir(cjsDir, console.log)

fs.readdir(originDir, (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            fs.copyFile(path.join(originDir, file), path.join(esmDir, file), console.log)
            fs.copyFile(path.join(originDir, file), path.join(cjsDir, file), console.log)
        })
    }
})