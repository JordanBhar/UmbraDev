document.addEventListener('DOMContentLoaded', function(){

window.onscroll = function(){scrollTransparentNavbar()} 

function scrollTransparentNavbar (){
    
    var navbar = document.getElementById("navTransparent")
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navbar.style.backgroundColor = 'rgb(72, 0, 155)';
        navbar.style.zIndex = "2"
        navbar.style.transition = "1s"
        
    }else{
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        navbar.style.zIndex = "1"
    }

}


})