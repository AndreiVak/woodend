let burger = document.querySelector(".burger")
let headerList = document.querySelector(".header__list")

burger.onclick = function () {
    burger.classList.toggle("burger_active")
    headerList.classList.toggle("header__list_active")
}