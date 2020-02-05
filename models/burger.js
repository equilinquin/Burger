const orm = require("../config/orm.js");
const burgers = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(boolean, condition, cb) {
      orm.updateOne("burgers", boolean, condition, function(res) {
        cb(res);
      });
    },
  };

module.exports = burgers;