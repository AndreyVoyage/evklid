let headerLoupe = document.querySelector(".header-loupe");
let headerSearchActive = document.querySelector(".header-search__active");
let headerLoupeClose = document.querySelector(".header-loupe__close");
let headerSearchInput = document.querySelector(".header-search__active-input");
let headerLogo = document.querySelector(".logo");
let headerBurger = document.querySelector(".burger");

function clickHeaderLoupe() {
    headerLoupe.classList.add("header-loupe--active");

    headerSearchActive.classList.add("header-search__active--active");

    headerSearchInput.classList.add("header-search__active-input--active");

    headerLoupeClose.classList.add("header-loupe__close--active");

    headerLogo.classList.add("logo--disable");

    headerBurger.classList.add("burger--disable");

    document.body.classList.add("stop-scroll");
}

function clickClosedHeaderLoupe() {
    headerSearchActive.classList.remove("header-search__active--active");
    
    headerLoupeClose.classList.remove("header-loupe__close--active");

    headerSearchInput.classList.remove("header-search__active-input--active");

    headerLogo.classList.remove("logo--disable");

    headerBurger.classList.remove("burger--disable");

    document.body.classList.remove("stop-scroll");
}
