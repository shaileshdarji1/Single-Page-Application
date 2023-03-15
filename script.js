let flag = 0;
slideshow(flag);
function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    for (let y of slides) {
        y.style.display = "none";
    }

    if (num === slides.length) {
        num = 0;
        flag = 0;
    }
    if (num < 0) {
        num = 3;
        flag = 3;
    }

    slides[num].style.display = "block";

}

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}