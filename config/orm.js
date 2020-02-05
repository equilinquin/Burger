const connection = require('./connection')

const orm = {
selectAll: function(table, cb) {
   const query =  "SELECT * FROM ??"
   connection.query(query, [table], function(err, res) {
       if(err) throw err;
       cb(res)
   });
  
},
insertOne: function(table, column, val, cb) {
    const query = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + val + "', 0)";
    connection.query(query, function(err, res) {
        console.log(res);
        if(err) throw err;
        cb(res);
    })
},
updateOne: function(table, boolean, condition, cb) {
    const booleanVal = true;
    if(boolean == null || boolean == false) {
        booleanVal = false;
    }
    const query = "UPDATE " + table + " SET devoured = " + booleanVal +  " WHERE " + condition;
    connection.query(query, function(err, res) {
        if (err) throw err;
        cb(res);
    });
}
};
module.exports = orm;