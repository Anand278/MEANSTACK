const Promise = require("bluebird");
const mysql = require("mysql");

const dbconfig = require("./config");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readALL = async () => {

    let connection = mysql.createConnection(dbconfig.db_config);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER";
    let results = connection.queryAsync(sql);

    await connection.endAsync();
    console.log(results);

    return results;

};

// readALL();
module.exports = {readALL};