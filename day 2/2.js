//ajaxcall (json text)

let jsonhere = () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        let rjson = JSON.parse(xhr.responseText);
        // console.log(rjson);

        domjsonlogic(rjson);
    };

    xhr.send();
};

let domjsonlogic = function(rjson) {
    // console.log(rjson);

    let parent  = document.getElementById('parentid');
    //    console.log(parent.children[0]);

    for(let i=0; i<rjson.length; i++) {
    let item = rjson[i];
       let pclone = parent.children[0].cloneNode(true);
            pclone.style.display = "flex";

    pclone.children[0].innerHTML = item.LastName;

    parent.insertBefore(pclone,parent.firstChild)
};
 };


 //ajax xml

 let xmlhere = function() {
    let xhr =  new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        let rxml = xhr.responseXML;

        domxmllogic(rxml);
    };

    xhr.send();
 };

 let domxmllogic = function(rxml) {
    //  console.log(rxml);

     const authorList = rxml.querySelectorAll("Author");

    //  console.log(authorList);
  for (let i = 0; i < authorList.length; i++) {
    const author = authorList[i];

    const firstName = author.children[0].innerHTML;

    let parent  = document.getElementById('parentid');

    let pclone = parent.children[0].cloneNode(true);
    pclone.style.display = "flex";

    pclone.children[0].innerHTML = firstName;

    parent.insertBefore(pclone,parent.firstChild)



   };

 };
