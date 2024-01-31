/* ==========좌측사이드========== */

var sidenav = document.querySelector(".sidenav");
var menuBtn = document.querySelector(".menuBtn");

menuBtn.onclick = function () {
    menuBtn.classList.toggle("active");
    if(menuBtn.classList.contains("active")){
        sidenav.style.display = "none";
    }else{
        sidenav.style.display = "block";
    }
}



