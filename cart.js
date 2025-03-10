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
let cartItemsContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function buildItems() {
  let cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  cart.forEach((cart, index) => {
    cartItemsContainer.innerHTML += `
    <div class="cart">
  <img src="${cart.image}"/>
  <p class="name-cart">${cart.name}</p>
    <div class= "count"> 
      <button onclick="increaseQuantity(${index})">+</button>
        <span class="quantity">${cart.quantity}</span> 
      <button onclick="decreaseQuantity(${index})">-</button>
    </div>
  <span class="price-cart">${cart.price}ج.م</span>
  <i class="fa-solid fa-xmark"></i>
  </div>
  `;
  });
}
buildItems();
function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateLocalStorage();
  buildItems();
}

// تقليل كمية المنتج (وحذفه إذا وصلت إلى 0)
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1); // حذف المنتج إذا وصلت الكمية لـ 0
  }

  updateLocalStorage();
  buildItems();
}
function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("DOMContentLoaded", getDataFromLocalStorage);

let numCart = document.getElementById("cart-count");
function getDataFromLocalStorage() {
  numCart.textContent = cart.length;
}

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let totalFoot = 0;
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fa-xmark").forEach((button) => {
    button.addEventListener("click", function () {
      let cartItem = this.parentElement;
      let itemName = cartItem.querySelector(".name-cart").textContent.trim();
      cartItems = cartItems.filter((item) => item.name !== itemName);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      cartItem.remove();
      getTotalPrice();
      numCart.textContent = cartItems.length;
    });
  });
  getTotalPrice();
});

function getTotalPrice() {
  let totalFoot = 0; // Initialize total sum

  const totalPriceElement = document.querySelector(".total-num");
  const finishTotal = document.querySelector("#finish-num");

  document.querySelectorAll(".price-cart").forEach((item) => {
    let priceText = item.innerText;
    let priceNumber = priceText.replace(/\D/g, "");
    let num = Number(priceNumber);

    totalFoot += num;
  });
  totalPriceElement.innerText = totalFoot;
  finishTotal.innerText = totalFoot;
}
