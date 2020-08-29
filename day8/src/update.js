const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "dac20",
};
let updateinp = async () => {
    let updateoperation = mysql.createConnection(db_config);

    await updateoperation.connectAsync();

    let sql = "UPDATE USER SET MBNO = '987654321' WHERE ID=5"; 
    let upop = updateoperation.queryAsync(sql);

    await updateoperation.endAsync();
    return upop;
};

module.exports = {updateinp};