const fs = require("fs");
const promise = require("bluebird");



promise.promisifyAll(fs);



let readDemo = async () => {
    const filepath1 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
    const filecontent1 = await fs.readFileAsync(filepath1, { encoding: "utf-8"});
    console.log(filecontent1);

    const filepath2 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
    const filecontent2 = await fs.readFileAsync(filepath2, { encoding: "utf-8"});
    console.log(filecontent2);

    const filepath3 = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
    const filecontent3 = await fs.readFileAsync(filepath3, { encoding: "utf-8"});
    console.log(filecontent3);
};

readDemo();


