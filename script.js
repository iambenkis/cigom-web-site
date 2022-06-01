const navlist = document.querySelector('.navlist');
const xmark = document.querySelector('.closelist');
const menu = document.querySelector('.fa-bars');
const search = document.querySelector('.searchbtn')
const searchMenu = document.querySelector('.search')
let leftChevron = document.querySelectorAll('.fa-chevron-left')
let rightChevron = document.querySelectorAll('.fa-chevron-right')
const closeList = () => {
    navlist.classList.remove('scroll')
}

const openList = () => {
    navlist.classList.add('scroll')
}
const openSearch = () => {
    searchMenu.classList.toggle('active-search')
}

xmark.addEventListener('click',closeList);
menu.addEventListener('click', openList);
search.addEventListener('click',openSearch); 


var acc = document.querySelectorAll(".accordion");
 
// for(let i = 0; i < acc.length; i++){
//     //alert('benkis')
//     // acc[i].addEventListener("click", function() {
//     //     // this.classList.toggle("active");
//     //     // let panel = this.nextElementSibling;
//     //     // if(panel.style.maxHeight) {
//     //     //     panel.style.maxHeight = null;
//     //     // } else {
//     //     //     panel.style.maxHeight = panel.scrollHeight + "px";
//     //     // }
       
//     // });
    
// }

acc.forEach((ac) =>  {
      ac.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            
        }
       
    });
})
 
 