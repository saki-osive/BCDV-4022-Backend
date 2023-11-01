const fs = require('fs');

function writeToFile(fileName, content) {
    fs.writeFileSync(fileName, 'utf-8');
}

function readFromFile (fileName){
    return fs.readFileSync(fileName, 'utf-8');
}

module.exports = {
    writeToFile,
    readFromFile
};


