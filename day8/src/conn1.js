const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
  try {
    console.log("reading starts..");

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "dac20",
    });

    
    await connection.connectAsync(); 

    console.log("connection success");

    await connection.endAsync();
  } catch (err) {
    console.log(err);
  }
};

readAllUser();