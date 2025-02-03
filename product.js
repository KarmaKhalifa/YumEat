// single product
let containerProduct = document.querySelector(".single-product");
const productSingleData = {
  name: "دجاج مشوي مع الخضار",
  desProduct:
    "تتميز وجبة الدجاج المشوي بالأعشاب بمذاقها الرائع الذي يجمع بين النكهات الغنية والطبيعية يتم تحضير الدجاج بعناية، حيث يُتبل بمزيج من الأعشاب الطازجة مثل الروزماري، الزعتر، والبقدونس، مع لمسة من الثوم والليمون لإضفاء نكهة منعشة ومتوازنة",
  img: "assets/delicious-chicken-biryani-7lw.png",
  price: 200,
  currency: "ج.م",
  rating: "⭐⭐⭐⭐⭐",
  ratingNumber: "(10)",
  ratingText: "أضف للمفضلة",
  buttonText: "أضف إلى العربة",
};

containerProduct.innerHTML = `
  
  <div class="single-product-image">
  <img src="${productSingleData.img}"/>
  </div>
  <div class="single-product-description">
  <div class="name-description">
  <h2>${productSingleData.name}</h2>
  <i class="fa-regular fa-heart"></i>
  </div>
  <div class="add-rating">
  <div class="ratting">
  <p>${productSingleData.rating}<span> تقييمات${productSingleData.ratingNumber}</span></p>
  </div>
  <div class="add-to">
   
    </div>
    <div class="share">
    <span>مشاركة المنتج<i class="fa-solid fa-share-nodes"></i></span>
</div>
</div>
<p> ${productSingleData.desProduct}</p>
<div class="des">
  <span class="original-price"> ${productSingleData.price} ج.م </span>
  <div class="count">
  <span class="text-des">حدد الكمية</span>
 <div class="btn-count"><button>+</button><span>1</span><button>-</button></div>
 </div>
  </div>

  <button class="btn">${productSingleData.buttonText}</button>
  </div>
  </div>
  `;

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
