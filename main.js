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
div.setAttribute("class","des")
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
// item-images

let itemContainer = document.getElementById("multi-img");

let itemImages = [
  {
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1630362023370-702069b26ef6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1695044277556-dc0956b68d30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
  },
];

itemImages.forEach((item, i) => {
  itemContainer.innerHTML += `
  <div class="item image-${i + 1}">
  <div class="overlay"><button>اكتشف الان</button></div>
   <img src= "${item.image}" alt="image">
  </div>`;
});
