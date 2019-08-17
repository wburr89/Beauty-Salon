window.onscroll = function () { stickFunction() };
    let navbar = document.querySelector('nav');

    let sticky = navbar.offsetTop;

    function stickFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky')
        } else {
            navbar.classList.remove('sticky');
        }
    }