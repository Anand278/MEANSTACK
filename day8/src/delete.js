const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const db_config ={
    host: "localhost",
    user: "root",
    password: "",
    database: "dac20",
};


let deleteinp = async () => {
    
    let connection = mysql.createConnection(db_config);

    await connection.connectAsync();

    let sql = "DELETE FROM USER WHERE ID=6";
    let del = connection.queryAsync(sql);

    console.log(del);
    await connection.endAsync();
    return del;
};

module.exports = {deleteinp};