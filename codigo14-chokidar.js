var chokidar = require('chokidar');
const { stat } = require('fs');
var watcher = chokidar.watch('.', {
    ignored: /[\/\\]\./,
    persistent: true,
})

var log = console.log.bind(console);

watcher
    .on('add', function(path) {  log('File', path, 'has been added.');})
    .on('unlink', function(path) {  log('File', path, 'has been removed.');})
    .on('unlinkDir', function(path) {  log('Directory', path, 'has been removed.');})
    .on('addDir', function(path) {  log('Directory', path, 'has been added.');})
    .on('error', function(error) {  log('Error happend', error);})
    .on('ready', function() {  log('Initial scan complete. Ready for changesssssss');})
    .on('raw', function(event, path, details) {  log('Raw event info: ', event, path, details);})
    .on('change', function(path, stats) {  if (stats) log('File', path, 'changed size to', stats.size)});