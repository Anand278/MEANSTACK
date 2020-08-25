//ajax call using jquery

let ajaxjquerycall = () => {

    let url = "http://localhost:7700/";

    $.ajax(url).done((data) => {
        // console.log(rjson);
        // let rjson = JSON.parse(data.responseText);
        $("#parentid")
        .clone(true)
        .html(data)
        .insertBefore($("#parentid"));
    });
};


// let domoperation = (data) => {
//     let parent = document.querySelector('#parentid');

//     let item = data;
//     console.log(item);
// };
