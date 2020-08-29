const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config ={
    host: "localhost",
    user: "root",
    password: "",
    database: "dac20",
};

let addinput = async (input) => {
    console.log("Server Started...")
    const connection = mysql.createConnection(db_config);

    await connection.connectAsync();

    let sql = "INSERT INTO USER (ID, MBNO, NAME) VALUES (?, ?, ?)";
    await connection.queryAsync(sql, [
      input.Id,
      input.Mbno,
      input.Name,
    ]);

    // console.log(operation);
    await connection.endAsync();

    // return operation;
    console.log(addinput);
    
};

addinput({
    Id: "6", 
    Mbno: "123454489", 
    Name: "prath",
});

// module.exports = {addinput};
// addinput();




// const Promise = require("bluebird");
// const mysql = require("mysql");

// Promise.promisifyAll(require("mysql/lib/Connection").prototype);
// Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// const db_config ={
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "dac20",
// };

// let adddata = async () => {
//     console.log("Server Started...")
//     const connection = mysql.createConnection(db_config);

//     await connection.connectAsync();

//     let sql = "INSERT INTO USER (ID, MBNO, NAME) VALUES (?, ?, ?)";
//     let operation = connection.queryAsync(sql, [
//         "3",
//         "983337958",
//         "Akshay Mule"
//     ]);

//     await connection.endAsync();

//     return operation;
//     console.log(operation);

// };

// adddata();
