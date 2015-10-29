var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(params){
  var file = this.paths.list;
  // console.log(that);
  var sites = [];
  fs.readFile(file, "utf8", function(err,data){
    if(err){
      throw new Error("File not found");
    }

    // console.log(typeof data);
    // data = data.toString();
    // console.log(data + " after");
    sites = data.split("\n");
    console.log(sites);
    params(sites);
  });

  // return sites;
};

exports.isUrlInList = function(){
};

exports.addUrlToList = function(){
};

exports.isUrlArchived = function(){
  file = "./archlll/" + argument
  fs.existsSync(file)
};

exports.downloadUrls = function(){
  //run htmlfetcher
};