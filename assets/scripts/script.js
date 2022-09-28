/*** Document Ready */
document.addEventListener('DOMContentLoaded',() =>{
    mobileMenu_init();
    window.addEventListener('resize', () =>{
        mobileMenu_init();
    });
});

/*** Mobile Menu */
function mobileMenu_show(){
    return (window.matchMedia('(max-width: 768px)').matches) ? true : false;
}

function mobileMenu_init() {
    if(mobileMenu_show()) {
        if(document.querySelector('#mobile-menu') == null) {
            document.querySelector('.header__inner').innerHTML += '<div id="mobile-menu"><span></span><span></span><span></span></div>';
            mobileMenu_build();

            document.querySelector('#mobile-menu').addEventListener('click', function(event) {
                event.preventDefault();
                mobileMenu_toggle();
            });
        }
    }
    else
    {
        mobileMenu_destroy();
    }
}

function mobileMenu_build() {
    let menu_content = document.createElement('div');
    menu_content.setAttribute('id', 'mobile-menu-content');

    document.body.append(menu_content);

    let menu_content_overflow = document.createElement('div');
    menu_content.appendChild(menu_content_overflow);

    let navigation_clone = document.querySelector('header nav').cloneNode(true);
    menu_content_overflow.appendChild(navigation_clone);
}

function mobileMenu_toggle(){
    document.getElementById('mobile-menu').classList.toggle('open');
    document.getElementById('mobile-menu-content').classList.toggle('open');
}

function mobileMenu_destroy(){
    let mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu != null){
        mobileMenu.remove();
        document.getElementById('mobile-menu-content').remove();
    }
}


/* modal window */

let modal = document.getElementById('myModal');

let btn = document.getElementById("header__btn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* slider */

$(document).ready(function(){
    $('.poploc__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: ".poploc__text"
    })
});

$(document).ready(function(){
    $('.poploc__text').slick({
        infinite: true,
        arrows: false,
        fade: true,
        asNavFor: ".poploc__slider"
    })
});

/* carousel */

$(document).ready(function(){
    $('.specoff__carousel').slick({
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    centerMode: false,
                    centerPadding: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    centerMode: false,
                    centerPadding: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    centerMode: false,
                    centerPadding: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
});