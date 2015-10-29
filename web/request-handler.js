var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelp = require('./http-helpers.js')
// require more modules/folders here!


var makeActionHandler = function(actionMap){
  return function(request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  }
};

exports.handleRequest = function (req, res) {
  console.log(req.url);
  console.log(req.method);

  makeActionHandler(httpHelp.actions);
  //res.end(archive.paths.list);
};
