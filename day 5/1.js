const http = require('http');

const reqlistener = (req, res) => {
    res.end("Hello World");
};

const server = http.createServer(reqlistener);

const confirmres = () => {
    console.log("Server is running...");
};
server.listen(9000, confirmres);