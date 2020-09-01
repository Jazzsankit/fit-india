burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('visible');
    navList.classList.toggle('visible');
    navbar.classList.toggle('h-nav');
})
function home(){
    alert('why home');
}