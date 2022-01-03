var header = document.querySelector(".willow-page-header");
var open = document.querySelector(".willow-page-header__content-open");
var close = document.querySelector(".willow-page-header__content-close");
var date = document.querySelector(".willow-page-footer__copyright-year");

date.innerText = new Date().getFullYear();

open.addEventListener("click", function (e) {
    e.preventDefault();
    header.setAttribute("data-content-open", "true");
});
close.addEventListener("click", function (e) {
    e.preventDefault();
    header.setAttribute("data-content-open", "false");
});
