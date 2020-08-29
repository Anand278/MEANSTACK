const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAll3 = async () => {
    console.log("read start...");

    let connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "dac20",
    });

    await connection.connectAsync();

        let sql = "SELECT * FROM USER WHERE ID=? AND NAME=?";
            let results = connection.queryAsync(sql, [2, "PRATIK KAJALE"]);

    await connection.endAsync();
    console.log(results);

    return results;
};

readAll3();




// const Promise = require("bluebird");
// const mysql = require("mysql");

// Promise.promisifyAll(require("mysql/lib/Connection").prototype);
// Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// let readAll2 = async () => {
//     console.log("read start...");

//     let connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "dac20",
//     });

//     await connection.connectAsync();

//         let sql = "SELECT * FROM USER WHERE ID=?";
//             let results = connection.queryAsync(sql, [2]);

//     await connection.endAsync();
//     console.log(results);

//     return results;
// };

// readAll2();




// const Promise = require("bluebird");
// const mysql = require("mysql");

// Promise.promisifyAll(require("mysql/lib/Connection").prototype);
// Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// let readAll1 = async () => {
//     console.log("read start...");

//     let connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "dac20",
//     });

//     await connection.connectAsync();

//         let sql = "SELECT * FROM USER WHERE ID=1";
//             let results = connection.queryAsync(sql);

//     await connection.endAsync();
//     console.log(results);

//     return results;
// };

// readAll1();




// const Promise = require("bluebird");
// const mysql = require("mysql");

// Promise.promisifyAll(require("mysql/lib/Connection").prototype);
// Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// let readAll = async () => {
//     console.log("read start...");

//     let connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "dac20",
//     });

//     await connection.connectAsync();

//         let sql = "SELECT * FROM USER";
//             let results = connection.queryAsync(sql);

//     await connection.endAsync();
//     console.log(results);

//     return results;
// };

// readAll();
