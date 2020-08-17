window.addEventListener('load', () => {
    console.log('loaded');

    let parent = document.querySelector('#parentid');

  let list = [
    { id: 1, title: "Javascript" },
    { id: 2, title: "HTML" },
    { id: 3, title: "CSS" },
    { id: 4, title: "DOM" },
    { id: 5, title: "AJAX" },
    { id: 6, title: "XML" },
    { id: 7, title: "JSON" },
    { id: 8, title: "BOOTSTRAP" },
    { id: 9, title: "JQUERY" },
    { id: 10, title: "MEAN" }
  ];

    for(let i=0; i<list.length; i++) {
        let item  = list[i];

        let pclone = parent.children[0].cloneNode(true);
        pclone.style.display = "flex";

        pclone.children[0].innerHTML = item.title;

        parent.insertBefore(pclone,parent.firstChild);

    }
});