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
    <h2>${websiteData.accounts.myAccount}</h2>
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
    <img src="${websiteData.about.imgWebsite}" />
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

let cartPage = document.querySelector(".cart-page");
let cartItemsContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let numCart = document.getElementById("cart-count");

function buildItems() {
  let cartItemsContainer = document.getElementById("cart-items");

  if (cart.length !== 0) {
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
      cartItemsContainer.innerHTML += `
      <div class="cart">
        <img src="${item.image}" />
        <p class="name-cart">${item.name}</p>
        <div class="count">
          <button onclick="increaseQuantity(${index})">+</button>
          <span class="quantity">${item.quantity}</span>
          <button onclick="decreaseQuantity(${index})">-</button>
        </div>
        <span class="price-cart">${item.price}ج.م</span>
        <i class="fa-solid fa-xmark" onclick="removeItem(${index})"></i>
      </div>
      `;
    });
  } else {
    cartPage.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>السلة فارغة</p>
      </div>
    `;
  }
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateLocalStorage();
  buildItems();
  setTimeout(getTotalPrice, 0); // تأخير الحساب لضمان تحديث الـ DOM أولاً
}


function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    removeItem(index);
  }
  updateLocalStorage();
  buildItems();
  setTimeout(getTotalPrice, 0);
}


function removeItem(index) {
  cart.splice(index, 1);
  updateLocalStorage();
  buildItems();
  getTotalPrice();
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  numCart.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
  getDataFromLocalStorage();
  buildItems();
});

function getDataFromLocalStorage() {
  numCart.textContent = cart.length;
}

function getTotalPrice() {
  let totalFoot = 0;
  
  cart.forEach((item) => {
    totalFoot += item.price * item.quantity; // حساب السعر بناءً على الكمية
  });

  document.querySelector(".total-num").innerText = totalFoot;
  document.querySelector("#finish-num").innerText = totalFoot;
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fa-xmark").forEach((button, index) => {
    button.addEventListener("click", function () {
      removeItem(index);
      getTotalPrice();
    });
  });

  getTotalPrice();
});
