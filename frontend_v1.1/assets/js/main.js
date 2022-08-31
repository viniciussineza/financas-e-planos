const menuButton = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById('menu');

sideNav.style.right == "-250px";

menuButton.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
    }
}

$(() => {

    $("a").on('click', (e) => {
        
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});