var path = require('path');
var archive = require('../helpers/archive-helpers');
//var h-help = require('./http-helpers.js')
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  res.end(archive.paths.list);
};
