// https://reqres.in/api/users?page=2

window.addEventListener('load', () => {
    let xhr  = new XMLHttpRequest();

    xhr.open("GET", " https://reqres.in/api/users?page=2");

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            
            let sjson = JSON.parse(xhr.responseText);

            domlogichere(sjson.data);
        }
    };

    xhr.send();
});


let domlogichere = function (list) {
    const parent = document.querySelector('#parentid');

    for(let i=0 ; i< list.length; i++) {
        let item = list[i];

        const pclone = parent.children[0].cloneNode(true);
        pclone.style.display = "flex";

        pclone.children[0].innerHTML =
        item.first_name+ " "+ item.last_name;

        parent.insertBefore(pclone,parent.firstChild);
    }
}