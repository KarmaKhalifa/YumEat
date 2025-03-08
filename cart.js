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

cart.forEach((cart, index) => {
  cartItemsContainer.innerHTML += `
  <div class="cart">
<img src="${cart.image}"/>
<p class="name-cart">${cart.name}</p>
<input type="number" id="quantity" name="quantity"  value="1" min="1" >
<span class="price-cart">${cart.price}ج.م</span>
<i class="fa-solid fa-xmark"></i>
</div>
`;
});
function addToCart(index) {
  cart.push(meals[index]);
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
