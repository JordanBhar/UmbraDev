document.addEventListener('DOMContentLoaded', function () {

    

    document.body.addEventListener("touchstart", playVideo)

    function playVideo() {

        const banner = document.getElementById("animatedBanner")

        if (banner.playing) {

        } else {
            banner.play()
        }
    }


    window.onscroll = function () { scrollTransparentNavbar() }

    function scrollTransparentNavbar() {

        var navbarCollapsables = document.getElementById("navbarSupportedContent")
        var navbar = document.getElementById("navTransparent")

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setTimeout(function () {
                navbarCollapsables.style.backgroundColor = '#48009b';
                navbar.style.backgroundColor = '#48009b';
            }, 200);

            navbar.style.zIndex = "2"
        } else {

            setTimeout(function () {
                navbarCollapsables.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }, 200);


            navbar.style.zIndex = "1"
        }

    }


})