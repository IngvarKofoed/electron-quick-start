
var logger = require('electron-log');
var fs = require('fs');

exports.log = (entry) => {
    fs.writeFileSync('ingvar.log', entry);
    logger.info('--- ' + entry);
}