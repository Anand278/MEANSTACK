const Promise = require("bluebird");
const mysql = require("mysql");

const dbconfig = require("./config");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let add = async (input) => {

    let connection = mysql.createConnection(dbconfig.db_config);

    await connection.connectAsync();

    let sql = "INSERT INTO USER (id, mbno, name) VALUES (?, ?, ?)";
    let results = connection.queryAsync(sql, [
        input.id,
        input.mbno,
        input.name,
    ]);

    await connection.endAsync();
    console.log(results);

    return results;

};

// readALL();
module.exports = {add};