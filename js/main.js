$(function(){
    $(".products__slider").slick({
        prevArrow: `<button class="products__slider-btn products__slider-left"><img class="products__btn-img" src="images/arrow-left.svg" alt="arrow-icon"></button>`,
        nextArrow: `<button class="products__slider-btn products__slider-right"><img class="products__btn-img" src="images/arrow-right.svg" alt="arrow-icon"></button>`,
        infinite: false,
    });
});

const BtnTitle = document.querySelectorAll(".questions__item-title")
const TabsItem = document.querySelectorAll(".questions__item")

BtnTitle.forEach((element) =>{
    element.addEventListener("click", () =>{
        TabsItem.forEach((element) => {
            element.addEventListener("click", () =>{
                element.classList.add("questions__item--active")
            })
        })
        TabsItem.forEach((element) => {
            element.classList.remove("questions__item--active")
        })

    })
})

const menuBtn = document.querySelector(".menu__btn")
const menuList = document.querySelector(".menu__list")

menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("menu__btn--active")
    menuList.classList.toggle("menu__list--active")
})

