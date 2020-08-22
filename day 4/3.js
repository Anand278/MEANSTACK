let ajaxcallwithjquery = () => {
    let xhr = new XMLHttpRequest();

    let cityname  = $('#inputid').val() || "mumbai";

    let url ="https://api.openweathermap.org/data/2.5/weather?appid=cc994db1e4bad6df1607033d00715e83&units=metric&q="+ cityname;

    $.ajax(url).done((data) => {
        $('#parentid :nth-child(1)')
        .clone(true)
        .html(data.name+" "+data.main.temp_min)
        .insertBefore($('#parentid :nth-child(1)'));
    });
    $('#inputid').val("");
};

