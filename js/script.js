document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".nav");
    let menuLinks = menu.querySelectorAll(".nav__link");
    let headerLoupe =document.querySelector(".header-search__active")

    burger.addEventListener('click',
        function () {

            burger.classList.toggle("burger--active");

            menu.classList.toggle("nav--active");

            headerLoupe.classList.toggle("header-search--disable")

            document.body.classList.toggle("stop-scroll")
        }
    )

    menuLinks.forEach(function (el) {
        el.addEventListener('click', function () {
            burger.classList.remove("burger--active")

            menu.classList.remove("nav--active")

            document.body.classList.remove("stop-scroll")
        })
    });
});
