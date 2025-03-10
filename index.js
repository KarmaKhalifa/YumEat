// toggle menu
let sideMenu = document.getElementById("side-Menu");
let parentMenu = document.querySelector(".parent-menu");
let menu = document.getElementById("menu");
let close = document.querySelector(".fa-xmark");
menu.addEventListener("click", () => {
  sideMenu.style.width = "250px";
  parentMenu.style.visibility = "visible";
  sideMenu.style.padding = "40px";
});
parentMenu.addEventListener("click", () => {
  sideMenu.style.width = "0px";
  parentMenu.style.visibility = "hidden";
  sideMenu.style.padding = "0px";
});
close?.addEventListener("click", () => {
  sideMenu.style.width = "0px";
  sideMenu.style.padding = "0px";
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
    title: "توست صحي بالأفوكادو والبيض المسلوق",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "وجبة كلاسيكية: برجر بالجبن مع رقائق البطاطس وحساء الطماطم",
    image:
      "https://images.unsplash.com/photo-1630362023370-702069b26ef6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "وجبة آسيوية لذيذة: دجاج مقرمش مع الأرز وعيدان الطعام",
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
    quantity: 0,
    description:
      "طبق شهي من البيض المطهو مع تشكيلة متنوعة من الخضار الطازجة، مناسب للإفطار الصحي.",
  },
  {
    name: "مكرونة بالمطاعم والريحان",
    image: "assets/makrona-imag.png",
    price: 135,
    oldPrice: null,
    currency: "ج.م",
    rating: 3.5,
    quantity: 0,
    description:
      "مكرونة إيطالية مطهية مع صلصة الطماطم الطازجة وأوراق الريحان العطرية لوجبة غنية بالنكهة.",
  },
  {
    name: "دجاج مشوي مع أعشاب",
    image: "assets/bsla.png",
    price: 170,
    oldPrice: 190,
    currency: "ج.م",
    rating: 4,
    quantity: 0,
    description:
      "قطع دجاج مشوية بعناية مع توابل الأعشاب الطازجة، تقدم مع طبق جانبي من الخضار المشوية.",
  },
  {
    name: "مكرونة بالصلصة الحمراء",
    image: "assets/delicious-pasta-img.png",
    price: 165,
    oldPrice: 180,
    currency: "ج.م",
    rating: 4,
    quantity: 0,
    description:
      "مكرونة شهية مغمورة في صلصة الطماطم الحمراء الغنية، مضاف إليها التوابل الإيطالية التقليدية.",
  },
  {
    name: "بيتزا بالخضار واللحم",
    image: "assets/betza-imag.png",
    price: 180,
    oldPrice: null,
    currency: "ج.م",
    rating: 5,
    quantity: 0,
    description:
      "بيتزا محضرة بعجينة طرية مع طبقة غنية من الجبن، الخضار الطازجة، وقطع اللحم الشهية.",
  },
  {
    name: "كاري الحمص الحار",
    image: "assets/delicious-chicken-imag.png",
    price: 170,
    oldPrice: null,
    currency: "ج.م",
    rating: 4,
    quantity: 0,
    description:
      "طبق نباتي مميز من الحمص المطهو بصلصة الكاري الحارة، مضاف إليه مزيج من البهارات الهندية العطرية.",
  },
  {
    name: "سلطة السبانخ مع اللحم",
    image: "assets/image__4_-tona-salat-imag.png",
    price: 110,
    oldPrice: null,
    currency: "ج.م",
    rating: 4.5,
    quantity: 0,
    description:
      "سلطة طازجة من السبانخ الغني بالعناصر الغذائية، مضاف إليها قطع اللحم المشوي والتتبيلة المميزة.",
  },
  {
    name: "دجاج مشوي مع الخضار",
    image: "assets/delicious-chicken-biryani-7lw.png",
    price: 165,
    oldPrice: 180,
    currency: "ج.م",
    rating: 4.5,
    quantity: 0,
    description:
      "وجبة متكاملة من الدجاج المشوي بتتبيلة مميزة، مقدمة مع الخضار المشوية لمن يبحث عن طعام صحي ولذيذ.",
  },
];

let products = document.getElementById("products");
let listProduct = document.querySelector(".products-list");
meals.forEach((meal, index) => {
  listProduct.innerHTML += `
  <div class="meal" >
  
     <img src="${meal.image}" onclick="getProduct(${index})" alt="${meal.name}">
      <div class="des-meal">
      <h3>${meal.name}</h3>
      <div class="rating">${"⭐".repeat(Math.round(meal.rating))}</div>
      
      <div class="total-des">
      <p class="price"> ${meal.price}${meal.currency} ${
    meal.oldPrice
      ? `<span class="old-price">${meal.currency} ${meal.oldPrice}</span>`
      : ""
  }</p>
      <button onclick="addToCart(${index}, '${
    meal.name
  }')">أضف إلى العربة </button>
      </div>
      </div>
       </div>
       `;
});

function getProduct(index) {
  localStorage.setItem("productData", JSON.stringify(meals[index]));
  window.location.href = "/product.html";
}

let weeklyContainer = document.querySelector(".offer-card");
const weekendOffers = [
  {
    name: "مكرونة بالسبانخ والخضروات",
    description:
      "وجبة متكاملة من الدجاج المشوي بتتبيلة مميزة، مقدمة مع الخضار المشوية لمن يبحث عن طعام صحي ولذيذ.",
    rating: 4.5,
    img: "/assets/Vector.png",
    price: 210.0,
    discountedPrice: 170.0,
    quantity: 0,
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
    name: "سلطة البطاطس والمايونيز",
    description:
      "وجبة متكاملة من الدجاج المشوي بتتبيلة مميزة، مقدمة مع الخضار المشوية لمن يبحث عن طعام صحي ولذيذ.",
    img: "/assets/Vector.png",
    rating: 4.5,
    price: 200,
    discountedPrice: 140,
    quantity: 0,
    currency: "ج.م",
    days: 14,
    hours: 13,
    minutes: 35,
    numDay: "يوم",
    hoursDay: "ساعه",
    minutesDay: "دقيقه",
    image: "assets/7oms-img.png",
    isLocked: true,
    btnOffer: "اضف للعربه",
  },
];

weekendOffers.forEach((offer, i) => {
  weeklyContainer.innerHTML += `
  <div class="card-double">
  <img  class="like2-img" onclick="getoffers(${i})" src="${offer.image}" >
  <div class="card-body">
  <h3 data-name="بيتزا"> ${offer.name}</h3>      
   <div class="rating-offers">${"⭐".repeat(Math.round(offer.rating))}</div>
    <div class="discounted-price">
        <p class="discount"  data-name="بيتزا">${offer.discountedPrice} ${
    offer.currency
  }</p>
        <p  class="original">${offer.price} ${offer.currency}</p>
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
       <button class="add-to-cart" onclick="addOfferToCart(${i})">${
    offer.btnOffer
  }</button>
       </div>
</div>
</div>
       `;
});

function getoffers(i) {
  localStorage.setItem("productData", JSON.stringify(weekendOffers[i]));
  window.location.href = "/product.html";
}
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

// opinion-customer

let opinionContainer = document.querySelector(".opinion-customer");

let review = [
  {
    nameReview: "مؤمن السيد",
    jobTitle: "مصمم ديكور",
    ratingReview: 5,
    reviewText:
      "خدمة رائعة وأكل لا يُقاوم! أحببت تنوع القائمة والجودة العالية للوجبات.",
    profileImage:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    nameReview: "محمد ابراهيم",
    jobTitle: "دكتور جراحه",
    ratingReview: 5,
    reviewText:
      "كل شيء مثالي! الطعام طازج وساخن، والتغليف أنيق جدًا. سأطلب مرة أخرى بالتأكيد!",
    profileImage:
      "https://images.unsplash.com/photo-1642978277577-83c6ceac4820?w=600&a",
  },
  {
    nameReview: "ساري احمد",
    jobTitle: "مصممة جرافيك",
    ratingReview: 5,
    reviewText:
      "أفضل تجربة طعام على الإطلاق! الأكل لذيذ والتوصيل سريع، والخدمة أكثر من رائعة!",
    profileImage:
      "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
  {
    nameReview: "مؤمن السيد",
    jobTitle: "مصمم ديكور",
    ratingReview: 5,
    reviewText:
      "خدمة رائعة وأكل لا يُقاوم! أحببت تنوع القائمة والجودة العالية للوجبات.",
    profileImage:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    nameReview: "محمد ابراهيم",
    jobTitle: "دكتور جراحه",
    ratingReview: 5,
    reviewText:
      "كل شيء مثالي! الطعام طازج وساخن، والتغليف أنيق جدًا. سأطلب مرة أخرى بالتأكيد!",
    profileImage:
      "https://images.unsplash.com/photo-1642978277577-83c6ceac4820?w=600&a",
  },
  {
    nameReview: "ساري احمد",
    jobTitle: "مصممة جرافيك",
    ratingReview: 5,
    reviewText:
      "أفضل تجربة طعام على الإطلاق! الأكل لذيذ والتوصيل سريع، والخدمة أكثر من رائعة!",
    profileImage:
      "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
];
review.forEach((opinion) => {
  let opinionContainer = document.querySelector(".opinion-customer");
  opinionContainer.innerHTML += `
  <div class="opinion-card swiper-slide">
  <div class="person">
  <img src="${opinion.profileImage}"/>
  <div class="name-person">
  <h2>${opinion.nameReview}</h2> 
  <h4>${opinion.jobTitle}</h4>
  <div class="rating-opinion">${"⭐".repeat(
    Math.round(opinion.ratingReview)
  )}</div>
  </div>
  </div>
  <div class="text-opinion">
       <p>${opinion.reviewText}</p>
       </div>
       </div>
  `;
});

const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// footer
const websiteData = {
  about: {
    imgWebsite: "/assets/logo.png",
    socialMedia: "تابعنا علي ",
    snapchat: "fa-brands fa-snapchat",
    instagram: "fa-brands fa-instagram",
    twitter: "fa-brands fa-twitter",
    facebook: "fa-brands fa-facebook-f",
  },
  conected: {
    call: "للتواصل ",
    phone: "01026191645",
    mobile: "01113456789",
    whatsapp: "واتساب",
    whatsappPhone: "موبايل ",
  },
  url: {
    links: " روابط ",
    aboutUs: "من نحن",
    privacyPolicy: "سياسة الخصوصية",
    termsAndConditions: "الشروط والأحكام",
    techSupport: "الدعم الفني",
  },
  accounts: {
    myAccount: "حسابي",
    account: "حسابي",
    cart: "سلة المشتريات",
    favorites: "المفضلة",
  },
};

let footerContainer = document.querySelector(".footer");

footerContainer.innerHTML += `
  <div class="myAccount">
  <h2> ${websiteData.accounts.myAccount}</h2>
  <p>${websiteData.accounts.account}</p>
  <p>${websiteData.accounts.cart}</p>
  <p>${websiteData.accounts.favorites}</p>
  </div>
  <div class="links">
  <h2>${websiteData.url.links}</h2>
  <p>${websiteData.url.aboutUs}</p>
  <p>${websiteData.url.techSupport}</p>
  <p>${websiteData.url.privacyPolicy}</p>
  <p>${websiteData.url.termsAndConditions}</p>
  </div>
  
  <div class="contact">
  <h2>${websiteData.conected.call}</h2>
 <div class="call-phone">
  <p class="whatsapp">${websiteData.conected.whatsappPhone}</p>
   <p>${websiteData.conected.mobile}</p>
   </div>
   <div class="call-mobile">
   <p class="whatsapp">${websiteData.conected.whatsapp}</p>
    <p>${websiteData.conected.phone}</p>
    </div>
  </div>
  <div class="socialMedia">
  <img src="${websiteData.about.imgWebsite}"/>
  <div class="des-social">
  <p>${websiteData.about.socialMedia}</p>
  <div class="links-social">
  <a href="#"><i class="${websiteData.about.facebook}"></i></a>
  <a href="#"><i class="${websiteData.about.twitter}"></i></a>
  <a href="#"><i class="${websiteData.about.instagram}"></i></a>
  <a href="#"><i class="${websiteData.about.snapchat}"></i></a>
  </div>
  </div>
   </div>
  `;
// function add to cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(index, name) {
  // cart.push(meals[index]);
  let existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    let newItem = { ...meals[index], quantity: 1 };
    cart.push(newItem);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getDataFromLocalStorage();
}

function addOfferToCart(index) {
  cart.push(weekendOffers[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  getDataFromLocalStorage();
}
document.addEventListener("DOMContentLoaded", getDataFromLocalStorage);

function getDataFromLocalStorage() {
  let numCart = document.getElementById("cart-count");
  numCart.textContent = cart.length;
}
