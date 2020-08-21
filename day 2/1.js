//  https://reqres.in/api/users?page=2


//  AJAX CALL
let clickhere = function() {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const rjosn = JSON.parse(xhr.responseText);
        // console.log(rjosn);

        domlogichere(rjosn);
    };

     xhr.open("GET", "https://reqres.in/api/users?page=2");
     xhr.send();
};

 let domlogichere = function(rjson) {
        // console.log(item);

    let parent = document.getElementById('parentid');

    for (let i=0; i<rjson.data.length; i++) {

        let item = rjson.data[i];
    // console.log(parent.children[0]);
    let pclone = parent.children[0].cloneNode(true);
        pclone.style.display = "flex";

    pclone.children[0].innerHTML ="name:- " + item.first_name + "<br> " + "email:- "+ item.email;

    // console.log(newelement);
    parent.insertBefore(pclone,parent.firstChild);
};
};