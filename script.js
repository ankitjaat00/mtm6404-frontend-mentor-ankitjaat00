const buttonOpen = document.querySelector(".btn-menu-open");

const buttonClose = document.querySelector(".btn-menu-close");

const menu = document.querySelector(".menu");

buttonOpen.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("menu open::::")
    menu.classList.add("open");
});

buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("menu close::::")
    menu.classList.remove("open");
});
