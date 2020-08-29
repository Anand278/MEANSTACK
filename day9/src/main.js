const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbadd = require("./db.add");
const dbread = require("./db.read");

app.get("/", async (req, res) => {
  try {
      const id = req.query.id;
      const mbno = req.query.mbno;
      const name = req.query.name;

    const connection = mysql.createConnection({
        host: "localhost",
      user: "root",
      password: "",
      database: "dac20",
    });

    await connection.connectAsync();

    let sql =
    "INSERT INTO USER (id, mbno, name) VALUES (?, ?, ?)"
    await connection.queryAsync(sql, [id, mbno, name]);

    await connection.endAsync();

    const json = { message: "Record Added..." };
    res.json(json);
  } catch (err) {
    const json = { message: "Error Occured!!" };
    res.json(json);
  }
});

app.get("/adduser", async (req, res) => {
  try {
    const input = req.query;
    await dbadd.add(input);

    const json = { message: "Success" };
    res.json(json);
  } catch (err) {
    const json = { message: "Failure" };
    res.json(json);
  }
});

app.get("/alluser", async (req, res) => {
  try {
    const results = await dbread.readALL();

    res.json(results);
  } catch (err) {
    const json = { message: "Failure" };
    res.json(json);
  }
});

app.listen(3000);