//"https://api.openweathermap.org/data/2.5/weather?
// appid=7023923dd26a725da995c75b65864de5&units=metric&q="

let ajaxcall = () => {

    let cityname = "pune";

    let url ="https://api.openweathermap.org/data/2.5/weather?appid=cc994db1e4bad6df1607033d00715e83&units=metric&q=" +
    cityname;

    $.ajax(url).done((data1) => {
        domoperation(data1);
    }); 
};

let domoperation = (data1) => {
    let item = data1;
    let parent = document.querySelector('#parentid');

    let newElement = parent.children[0].cloneNode(true);
    // console.log(newElement);
    newElement.inerHTML = item.name + item.main.temp_max;
    
    parent.insertBefore(newElement,parent.firstChild);
};

