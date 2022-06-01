const navlist = document.querySelector('.navlist');
const xmark = document.querySelector('.closelist');
const menu = document.querySelector('.fa-bars');
const search = document.querySelector('.searchbtn')
const searchMenu = document.querySelector('.search')
let leftChevron = document.querySelectorAll('.fa-chevron-left');
let rightChevron = document.querySelectorAll('.fa-chevron-right');
let headimg = document.querySelector('.header-img')



let slideIndex = [1,1];
let slideId = ["fa-chevron-left", "fa-chevron-right"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
} 

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
 
 