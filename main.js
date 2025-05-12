
//header
// 위로 스크롤할때만 header 보이기
let header = document.querySelector('header')

// 스크롤이 움직이면 headerOn함수 호출
window.addEventListener('scroll', headerOn)
function headerOn(){
    let scroll = window.scrollY;
    if ( scroll < now ) {
        header.classList.add('on')
    } else {
        header.classList.remove('on')
    }
    now = scroll;
}
// 현재 스크롤의 위치
let now = window.scrollY

// main-visual
var mainVisual = new Swiper(".mainVisual", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {   
        nextEl: ".main-next",
        prevEl: ".main-prev",
    },
    pagination: {
        el: ".mainVisual .swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1300,
        disableOnInteraction: false,
    },
    followFinger: true,
});

// best-item
var best = new Swiper(".best", {
    slidesPerView: 5,
    spaceBetween: 50,
    loop: true,
    navigation: {   
        nextEl: ".best-next",
        prevEl: ".best-prev",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    followFinger: true,
});

// selection
let s_tabs = document.querySelectorAll('.selection-nav li')
let s_box = document.querySelectorAll('.selection-container .s-box')

s_tabs.forEach(function(tab, index){
    tab.addEventListener('click',function(){
        s_tabs.forEach(function(tab, index){
            tab.classList.remove('on')
        })
        tab.classList.add('on')

        s_box.forEach(function(div, idx){
            if ( index === idx ){
                div.classList.add('on')
            } else {
                div.classList.remove('on')
            }
        })
        
    })
})

// collaboration
var celeb = new Swiper(".celeb", {
    slidesPerView: 3,
    spaceBetween: 70,
    loop: true,
    navigation: {   
        nextEl: ".celeb-next",
        prevEl: ".celeb-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    followFinger: true,
});

// instagram
var instaContainer = new Swiper(".insta-container", {
    // slidesPerView: 5,
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    speed: 2000,
    allowTouchMove: false,
});


var instaContent = document.querySelector(".insta-content");

instaContent.addEventListener('mouseenter', function() {
    instaContainer.autoplay.stop();
});

instaContent.addEventListener('mouseleave', function() {
    instaContainer.autoplay.start();
});

// brand-pick
var brand = new Swiper(".brand", {
    loop: true,
    navigation: {   
        nextEl: ".brand-next",
        prevEl: ".brand-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    followFinger: true,
});


