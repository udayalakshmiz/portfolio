const sideBar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
})

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
})