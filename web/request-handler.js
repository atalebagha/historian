var finalhandler = require('finalhandler')
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelp = require('./http-helpers.js')
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log(__dirname + "Request Handler");
  httpHelp.makeActionHandler(actions);
  //res.end(archive.paths.list);
};

var actions = {
  'GET': function(req, res){
    var done = finalhandler(req, res)
    console.log(__dirname + "  Get Test");
    httpHelp.serveIndex(req, res, done)
    // httpHelp.sendResponse(res, INPUT_DATA );
  },
  'POST': function(req, res){
    // httpHelp.collectData(req, function(message){
    //   // message.objectId = ++objectIdCounter;
    //   // messages.push(message);
    //   // httpHelp.sendResponse(res, {objectId: message.objectId}, 201);
    // });
  },
  'OPTIONS': function(req, res){
    // httpHelp.sendResponse(res, null);
  }
};
