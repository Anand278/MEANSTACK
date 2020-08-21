//---------------------------------JSON ---------------------------------------------

//ajax json

let jsonhere = function() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        let rjson = JSON.parse(xhr.responseText);
        jsondomoperation(rjson);
    };

    xhr.send();
};

// JSON DOM operation

let jsondomoperation = (rjson) => {

   
    for(let i=0; i<rjson.length; i++) {
        let item = rjson[i];
        let parent = document.querySelector('#parentid');

        // console.log(parent.children[0]);
        let newElement = parent.children[0].cloneNode(true);
        console.log(newElement)

        newElement.children[0].innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newElement,parent.firstChild);

    }
};

//------------------------------XML ---------------------------------------------------

//ajax xml 
let xmlhere = function() {
    let xml = new XMLHttpRequest();

    xml.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xml.setRequestHeader('accept', 'application/xml');

    xml.onload = () => {
        // console.log(xml.responseXML);

        xmldomoperation(xml.responseXML);

    };

    xml.send();
};


let xmldomoperation = (rxml) => {
    let authorlist = rxml.querySelectorAll("Author");

    for(let i=0; i<authorlist.length; i++){
        let item = authorlist[i];

        let parent = document.querySelector("#parentid");

        let newElement = parent.children[0].cloneNode(true);

        let firstname = item.children[0].innerHTML;
        let lastname = item.children[3].innerHTML;

        newElement.children[0].innerHTML = firstname + " " + lastname;

        parent.insertBefore(newElement, parent.firstChild);
    };
};