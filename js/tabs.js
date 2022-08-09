let tabsBtn = document.querySelectorAll(".work__button");
let tabsItem = document.querySelectorAll(".work__content");

tabsBtn.forEach(function(element) {
    element.addEventListener("click", function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove("work__button--active") });
        e.currentTarget.classList.add("work__button--active");

        tabsItem.forEach(function(element) {element.classList.remove("work__content--active")});
        document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');
    });
});
