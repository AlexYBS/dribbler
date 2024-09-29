var navbarChange = document.getElementById("offcanvasDarkNavbar");
var h1Animation = document.querySelector("h1");

function phoneVersion(){
    if(window.innerWidth <= 768){
    navbarChange.classList.remove("offcanvas-top");
    navbarChange.classList.add("offcanvas-end"); 
    h1Animation.classList.remove("animation-h1");
}else{
    navbarChange.classList.remove("offcanvas-end");
    navbarChange.classList.add("offcanvas-top");
}
}

phoneVersion();

window.addEventListener("resize",phoneVersion);

/*javascript for footer*/

var year = new Date();
var thisYear = year.getFullYear();

console.log(thisYear);

/*delete button*/
