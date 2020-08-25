const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs);

let readDemo = () => {
    const filepath = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
    fs.readFileAsync(filepath, {encoding: "utf-8"})
    .then((data)=>{
        console.log(data);  //complete
    })
    .catch((err)=>{
        console.log(err);   //error
    });
};




// const fs = require("fs");
// const promise = require("bluebird");

// promise.promisifyAll(fs);

// let readDemo = () => {
//     const filepath = "C:/Users/Rajeshwar/Desktop/MEAN-Server/day7/text.txt";
//     let mpromise = fs.readFileAsync(filepath, {encoding: "utf-8"});
//     console.log(mpromise);

//     //complete
//     mpromise
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// };

    // //complete
    // mpromise.then((data)=>{
    //     console.log(data);
    // });
    // mpromise.catch((err)=>{
    //     console.log(err);
    // });
//};


readDemo();