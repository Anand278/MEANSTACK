const express = require("express");
const app = express();

// http://localhost:3000/?username=Anand&id=16

app.get("/", (req, res) => {

    console.log("Server Started...")

    const id = req.query.id;
    const username = req.query.username;

    const json = {id: 16, username: "Anand Gujja"};
    res.json(json);

});

app.get('/search', (req, res) => {
    const json = {id: 10, title: "I am in Search Api"};
    res.json(json);

});


app.listen(3000);