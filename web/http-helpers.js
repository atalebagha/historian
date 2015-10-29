var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {



  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
};

exports.makeActionHandler = function(actionMap){
  return function(request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  }
};

exports.sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

var actions = {
  'GET': function(request, response){
    utils.sendResponse(response, {results: messages});
  },
  'POST': function(request, response){
    // changed
    utils.collectData(request, function(message){
      message.objectId = ++objectIdCounter;
      messages.push(message);
      utils.sendResponse(response, {objectId: message.objectId}, 201);
    });
  },
  'OPTIONS': function(request, response){
    utils.sendResponse(response, null);
  }
};

// As you progress, keep thinking about what helper functions you can put here!
