/**
 * http://usejsdoc.org/
 */


var mysql = require('mysql');
var connection =  mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'root',
    database : 'mysql',
	charset : 'UTF8'
 });
connection.connect();
connection.query( 'show tables', function(err, rows){
    if(err)    {
        throw err;
    }else{
        console.log( rows );
        connection.destroy();
        
    }
});
