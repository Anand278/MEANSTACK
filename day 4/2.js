let callajaxusingjquery = () => {

    let cityname = "pune";

    let url ="https://api.openweathermap.org/data/2.5/weather?appid=cc994db1e4bad6df1607033d00715e83&units=metric&q="+
    cityname;

    $.ajax(url).done((data1) => {
        $("#parent :nth-child(1)")
        .clone(true)
        .html(data1.name + " " + data1.main.temp_max + " V3")
        .insertBefore($("#parent :nth-child(1)"));
    });
};


// let domoperationv1 = (data1) => {
//     // const parent = $('#parentid');

//     const newElement = $("#parentid :nth-child(1)").clone(true);
//     newElement.html(data1.name +" "+data1.main.temp_min + " V1");

//     newElement.insertBefore($("#parentid :nth-child(1)"));
// };

/*
let domoperationv2 = (data1) => {
    let newElement = $("#parentid :nth-child(1)")
    .clone(true)
    .html(data1.name+ " " + data1.main.temp_min+ " V2");

    newElement.insertBefore($("#parentid nth-child(1)"));

};
*/
