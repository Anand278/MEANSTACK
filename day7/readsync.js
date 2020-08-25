const fs = require("fs");

let readDmo1 = () => {
    try {
        
    console.log("reading demo1...");
    const filePath = "C:/Users/Rajeshwar/Desktop/file1.txt";
    const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"});
    console.log(fileContent);
    } catch(err) {
        console.log("error occured", err.message);
    }
};

readDmo1();


// let readDemo = () => {
//     console.log("read file");
//     const filePath = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
//     const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"});
//     console.log(fileContent);
// };

// readDemo();


