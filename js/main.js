document.addEventListener('DOMContentLoaded', function(){
    var banner = document.getElementById("animatedBanner")
    banner.style.zIndex = "-10"
    

document.body.addEventListener("touchstart", playVideo)

function playVideo (){

    const banner = document.getElementById("animatedBanner")

    if(banner.playing){
        
    }else{
        banner.play
    }
}


window.onscroll = function(){scrollTransparentNavbar()} 

function scrollTransparentNavbar (){
    
    var navbar = document.getElementById("navTransparent")
    
    
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor = 'rgb(72, 0, 155)';
        navbar.style.zIndex = "2"
        navbar.style.transition = "1s"
        
    }else{
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        navbar.style.zIndex = "1"
    }

}


})