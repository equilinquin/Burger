const connection = require('./connection')

const orm = {
selectAll: function(table) {
   const query =  "SELECT * FROM ??"
   connection.query(query, [table], function(err, res) {
       if(err) throw err;
   })
}

insertOne:
updateOne:
}
module.exports = orm;