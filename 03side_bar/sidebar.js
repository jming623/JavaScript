var sidenav = document.querySelector(".sidenav");
var menubtn = document.querySelector(".menubtn");

menubtn.addEventListener("click",onSidenav);

function onSidenav(){
    var btn = sidenav.style.width;
    /* console.log(sidenav.style.width); */
    /* console.log(window.innerWidth); */ //브라우저의 안쪽 넓이
    
    if(window.innerWidth <= 767){ //모바일
        if(btn == "" || btn == "0px"){
            sidenav.style.width="200px";
        }else{
            sidenav.style.width="0px";
        }


    }else{ //웹환경
        if(btn == "" || btn == "200px"){
            sidenav.style.width="0px";
        }else{
            sidenav.style.width="200px";
        }
    }

}