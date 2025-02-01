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
div.setAttribute("class", "des");
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

const itemNUM = document.getElementById("itemNUM");
let numberData = [
  { paragraph: "1710+", heading: "Savlngs" },
  { paragraph: "50+", heading: "Branches" },
  { paragraph: "1788+", heading: "Reviews" },
  { paragraph: "128+", heading: "items" },
];
numberData.forEach((item) => {
  itemNUM.innerHTML += `
          <div class="item">
            <h2>${item.paragraph}</h2>
            <p>${item.heading}</p>
          </div>
          `;
});

// item-images
let itemContainer = document.getElementById("multi-img");

let itemImages = [
  {
    title:"توست صحي بالأفوكادو والبيض المسلوق",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title:"وجبة كلاسيكية: برجر بالجبن مع رقائق البطاطس وحساء الطماطم",
    image:
      "https://images.unsplash.com/photo-1630362023370-702069b26ef6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    title:"وجبة آسيوية لذيذة: دجاج مقرمش مع الأرز وعيدان الطعام",
    image:
      "https://plus.unsplash.com/premium_photo-1695044277556-dc0956b68d30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
  },
];

itemImages.forEach((item, i) => {
  itemContainer.innerHTML += `
  <div class="item image-${i + 1}">
  <div class="overlay">
     <h2>${item.title}</h2>
     <button>اكتشف الان</button>
  </div>
   <img src= "${item.image}" alt="image">
  </div>`;
});

// product
const productContainer = document.getElementById("product");
let meals = [
  {
    name: "بيض بالمطاعم والخضار",
    image: "assets/omlite-imag.png",
    price: 120,
    oldPrice: 135,
    currency: "ج.م",
    rating: 4.5,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "مكرونة بالمطاعم والريحان",
    image: "assets/makrona-imag.png",
    price: 135,
    oldPrice: null,
    currency: "ج.م",
    rating: 3.5,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "دجاج مشوي مع أعشاب",
    image: "assets/bsla.png",
    price: 170,
    oldPrice: 190,
    currency: "ج.م",
    rating: 4,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "مكرونة بالصلصة الحمراء",
    image: "assets/delicious-pasta-img.png",
    price: 165,
    oldPrice: 180,
    currency: "ج.م",
    rating: 4,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "بيتزا بالخضار واللحم",
    image: "assets/betza-imag.png",
    price: 180,
    oldPrice: null,
    currency: "ج.م",
    rating: 5,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "كاري الحمص الحار",
    image: "assets/delicious-chicken-imag.png",
    price: 170,
    oldPrice: null,
    currency: "ج.م",
    rating: 4,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "سلطة السبانخ مع اللحم",
    image: "assets/image__4_-tona-salat-imag.png",
    price: 110,
    oldPrice: null,
    currency: "ج.م",
    rating: 4.5,
    buttonText: "أضف إلى العربة",
  },
  {
    name: "دجاج مشوي مع الخضار",
    image: "assets/delicious-chicken-biryani-7lw.png",
    price: 165,
    oldPrice: 180,
    currency: "ج.م",
    rating: 4.5,
    buttonText: "أضف إلى العربة",
  },
];
let products = document.getElementById("products");
let listProduct = document.querySelector(".products-list");
meals.forEach((meal) => {
  listProduct.innerHTML += `
  <div class="meal">
      <img src="${meal.image}" alt="${meal.name}">
      <div class="des-meal">
      <h3>${meal.name}</h3>
      <div class="rating">${"⭐".repeat(Math.round(meal.rating))}</div>
      
      <div class="total-des">
      <p class="price"> ${meal.price}${meal.currency} ${
    meal.oldPrice
      ? `<span class="old-price">${meal.currency} ${meal.oldPrice}</span>`
      : ""
  }</p>
 
      <button>${meal.buttonText} <i class="fa-solid fa-cart-plus"></i></button>
      </div>
      </div>
       </div>
       `;
});
let weeklyContainer = document.querySelector(".offer-card");
const weekendOffers = [
  {
    nameOffer: "مكرونة بالسبانخ والخضروات",
    rating: 4.5,
    img: "/assets/Vector.png",
    originalPrice: 210.0,
    discountedPrice: 170.0,
    currency: "ج.م",
    days: 20,
    hours: 16,
    minutes: 55,
    numDay: "يوم",
    hoursDay: "ساعه",
    minutesDay: "دقيقه",
    image: "assets/image__3_-3rod.png",
    isLocked: true,
    btnOffer: "اضف للعربه",
  },
  {
    nameOffer: "سلطة البطاطس والمايونيز",
    img: "/assets/Vector.png",
    rating: 4.5,
    originalPrice: 200,
    discountedPrice: 140,
    currency: "ج.م",
    days: 20,
    hours: 16,
    minutes: 55,
    numDay: "يوم",
    hoursDay: "ساعه",
    minutesDay: "دقيقه",
    image: "assets/7oms-img.png",
    isLocked: true,
    btnOffer: "اضف للعربه",
  },
];

weekendOffers.forEach((offer) => {
  weeklyContainer.innerHTML += `
  <div class="card-double">
  <img  class="like2-img" src="${offer.image}" >
  <div class="card-body">
  <div class="behind">
  <img  class="like-img"src="${offer.img}">
   <h3>${offer.nameOffer}</h3>
   </div>
  
   <div class="rating-offers">${"⭐".repeat(Math.round(offer.rating))}</div>
  
    <div class="discounted-price">
        <p class="discount">${offer.discountedPrice} ${offer.currency}</p>
        <p  class="original">${offer.originalPrice} ${offer.currency}</p>
    </div>
    <div class="time-list">
    <div class="number-time">
     <p class="day">
    <span  class="number-day">${offer.days}</span>
     <span class="number-hours"> ${offer.hoursDay}</span>
      </p>
      <p class="hours">
        <span  class="number-day">${offer.hours}</span>
      <span class="number-hours">${offer.minutesDay}</span>
       </p>
       <p class="minutes">
       <span class="number-day"> ${offer.minutes}</span>
       <span class="number-hours"> ${offer.numDay}</span>
        </p>
        </div>   
       <button class="add-to-cart" >${offer.btnOffer}</button>
       </div>
</div>
</div>
       `;
});
// spacial-offer

const specialOffer = document.querySelector(".banner-img");
const specialOfferData = {
  imgSpecial: "/assets/bannar-image.png",
  titleSpecial: "تخفيضات مميزة",
  desSpecial:
    "استمتع بتجربة طعام لا تُنسى مع تشكيلتنا المتنوعة من أشهى الأطباق التي تلبي جميع الأطباق",
  btnSpecial: "تسوق الان",
};

specialOffer.innerHTML += `
 <img  class="bg-img"src="${specialOfferData.imgSpecial}">
<div class="body-specialOffer">
<h3 class="titleSpecial">${specialOfferData.titleSpecial}</h3>
<p class="desSpecial">${specialOfferData.desSpecial}</p>
<button>  ${specialOfferData.btnSpecial} </button>
</div>
`;
