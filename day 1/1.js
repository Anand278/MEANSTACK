let parent = document.querySelector('#parentblock');
console.log(parent);

window.addEventListener('load', () => {
    console.log('load done');

    let parent = document.querySelector('#parentblock');
    console.log(parent);

    for(let i=0; i<10 ; i++) {
        var pclone  = parent.children[0].cloneNode(true);
        pclone.style.display = "flex";
         parent.insertBefore(pclone,parent.firstChild);
    }

});



// window.addEventListener('load', () => {
//     console.log('load done');

//     let parent = document.querySelector('#parentblock');
//     console.log(parent);

//     for(let i=0; i<10 ; i++) {
//         let pclone = document.querySelector('#childid').cloneNode(true);
//         parent.insertBefore(pclone,parent.firstChild);
    
//     }
// });