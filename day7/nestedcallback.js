let fs = require("fs");

let readDemo = () => {
    //file 1
    const filepath1 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/textfile1.txt";
    const filecontent1 = fs.readFile(filepath1, {encoding: "utf-8"}, (err, data)=>{
        console.log("1", data);

     //file 2
     const filepath2 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/textfile1.txt";
     const filecontent2 = fs.readFile(filepath2, {encoding: "utf-8"}, (err, data)=>{
         console.log("2", data);
        
          //file 3
    const filepath3 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/textfile1.txt";
    const filecontent3 = fs.readFile(filepath3, {encoding: "utf-8"}, (err, data)=>{
        console.log("3", data);

         //file 4
    const filepath4 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/textfile1.txt";
    const filecontent4 = fs.readFile(filepath4, {encoding: "utf-8"}, (err, data)=>{
        console.log("4", data);
            });
        });
    });
});
};

readDemo();