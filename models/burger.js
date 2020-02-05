const orm = require("../config/orm.js");
const burgers = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(boolean, condition, cb) {
      orm.updateOne("burgers", boolean, condition, function(res) {
        cb(res);
      });
    },
  };

module.exports = burgers;