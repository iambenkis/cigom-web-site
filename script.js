const navlist = document.querySelector('.navlist');
const xmark = document.querySelector('.closelist');
const menu = document.querySelector('.fa-bars');
const search = document.querySelector('.searchbtn')
const searchMenu = document.querySelector('.search')

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