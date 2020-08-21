//ajax call

let getbtnhere = () => {

    let xhr = new XMLHttpRequest();

    let cityname = document.querySelector('#inputid').value || "mumbai";

    let url = 
    "https://api.openweathermap.org/data/2.5/weather?appid=cc994db1e4bad6df1607033d00715e83&units=metric&q=";

    url = url + cityname;

    xhr.open("GET", url);

    xhr.onload = () => {
        // console.log(xhr.responseText);

        let rjson = JSON.parse(xhr.responseText);
        domoperation(rjson);
    };

    xhr.send();
    document.querySelector('#inputid').value = "";
};

let domoperation = (rjson) => {
 
    // console.log(rjson);

    let maxtemp = rjson.main.temp_max;
    let pressure = rjson.main.pressure;

    let parent = document.querySelector('#parentid');

    // console.log(parent.children[0]);

    let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";

    // console.log(newElement);

    newElement.innerHTML ="PRESSURE "+ pressure +" "+ "MAX " + maxtemp;

    // // parent.appendChild(newElement); 
    
    parent.insertBefore(newElement,parent.firstChild);
   
};