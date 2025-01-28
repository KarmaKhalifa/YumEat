let sideMenu = document.getElementById("side-Menu");
let parentMenu = document.querySelector(".parent-menu");
let menu = document.getElementById("menu");
let close = document.querySelector(".fa-xmark");
menu.addEventListener("click", () => {
  sideMenu.style.width = "250px";
  parentMenu.style.visibility = "visible";
});

close.addEventListener("click", () => {
    sideMenu.style.width = "0px";
    parentMenu.style.visibility = "hidden";
});
