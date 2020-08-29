let fs = require("fs");

let Promise = require("./node_modules/bluebird");

Promise.promisifyAll(fs);

const filePath = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day8/temp.txt";
fs.readFileAsync(filePath, { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

