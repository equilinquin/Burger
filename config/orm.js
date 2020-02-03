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
    const query = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(query, [table, column, val], function(err, res) {
        if(err) throw err;
        cb(res);
    })
},
updateOne: function(table, boolean, condition, cb) {
    const query = "UPDATE ?? SET devoured = ? WHERE ?";
    connection.query(query, [table, boolean, condition], function(err, res) {
        if (err) throw err;
        cb(res);
    });
}
};
module.exports = orm;