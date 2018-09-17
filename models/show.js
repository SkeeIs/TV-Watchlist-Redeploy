//import ORM
var orm = require("../config/orm.js");

//define model
var show = {
  all: function(cb) {
    orm.all("shows", function(result) {
      cb(result);  
    });
  },
  create: function(obj, cb) {
    orm.create("shows", obj, function(result) {
      cb(result);  
    });  
  },
  update: function(obj, condition, cb) {
    orm.update("shows", obj, condition, function(result) {
      cb(result);  
    });  
  },
  delete: function(condition, cb) {
    orm.delete("shows", condition, function(result) {
      cb(result);  
    });  
  }
};
//export db functions for controller
module.exports = show;