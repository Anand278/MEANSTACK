let fs = require("fs");

let readDemo = () => {
    console.log("reading demo...");
    const filepath = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
    const filecontent = fs.readFile(filepath, {encoding: "utf-8"}, (err, data)=>{
        console.log(data)
    })

};

readDemo();