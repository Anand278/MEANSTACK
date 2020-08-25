const mod = require("./list");
const http = require("http");

http.createServer((req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*");
const myres = JSON.stringify(mod.list);
res.end(myres);
})
.listen(5000, console.log("Server is Running..."));