// console.log("Show Runners...")

const http = require('http');
const teamlist = require('./team.info');
// console.log(teamlist[0]);
http.createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const rjson = JSON.stringify(teamlist.list);
    res.end(rjson);
}).listen(7700, console.log("Server is Running..."));
