// toggle menu
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

// mein banner
let banner = document.querySelector(".banner");
let divImg = document.createElement("div");
let img = document.createElement("img");
let bgImg = document.createElement("img");
let div = document.createElement("div");
let title = document.createElement("h1");
let text = document.createElement("p");
let btn = document.createElement("button");
let bannerData = {
  title: "اطلب طعامًا & لذيذًا وطازجًا في أي وقت",
  text: " استمتع بتجربة طلب طعام سهلة وسريعة مع أشهى الأطباق الطازجة والمحضرة بعناي. نوفر لك وجبات لذيذة في أي وقت",
  btn: "اكتشف الان",
  img: "/assets/img_banner.png",
  bgImg: "/assets/bg-banner.png",
};
divImg.setAttribute("id", "divImage");
img.setAttribute("id", "image");
divImg.appendChild(img);
title.append(bannerData.title);
text.append(bannerData.text);
btn.append(bannerData.btn);
bgImg.src = bannerData.bgImg;
img.src = bannerData.img;
div.appendChild(title);
div.appendChild(text);
div.appendChild(btn);
divImg.appendChild(img);
divImg.appendChild(bgImg);
banner.appendChild(div);
banner.appendChild(divImg);

// start banner

let numberData = {
  paragraph: "Savlngs",
  heading: "1710+",
  paragraphTwo: "50+",
  headingTwo: "Branches",
  paragraphThree: "1788+",
  headingThree: "Reviews",
  paragraphFour: "128+",
  headingFour: "items%",
};
const items = `
  <div class="item">
    <h2>1710+</h2>
    <p>Savings</p>
  </div>
  <div class="item-one">
    <h2>50+</h2>
    <p>Branches</p>
  </div>
  <div class="item-two">
    <h2>1788+</h2>
    <p>Reviews</p>
  </div>
  <div class="item-three">
    <h2>128+</h2>
    <p>Items</p>
  </div>
`;

const container = document.getElementById("itemNUM");

container.innerHTML = items;
