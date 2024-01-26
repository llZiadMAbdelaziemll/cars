let userInfo = document.querySelector(".head-log");
let userD = document.querySelector("#user");
let links = document.querySelector("#links");

if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";
  userD.innerHTML = localStorage.getItem("username");
}
let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
});
////////////////////////////////////////////////////////////////////////////////
let allProducts = document.querySelector("#all-products");
let products = [
  {
    id: 1,
    title: "Toyota Camry New",
    details: "3.5 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car1-660x440.jpg",
    price: 40000,
  },
  {
    id: 2,
    title: "T-Cross – 2023",
    details: "4.0 D5 PowerPulse Momentum 5dr AW..",
    imageUrl: "./images/cards/car3-660x440.jpg",
    price: 15000,
  },
  {
    id: 3,
    title: "C-Class – 2023",
    details: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car6-660x440.jpg",
    price: 30000,
  },
  {
    id: 4,
    title: "Ford Transit – 2021",
    details: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car11-660x440.jpg",
    price: 25000,
  },
  {
    id: 1,
    title: "New GLC – 2023",
    details: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car13-660x440.jpg",
    price: 90000,
  },
  {
    id: 2,
    title: "Audi A6 3.5 – New",
    details: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car14-660x440.jpg",
    price: 60000,
  },
  {
    id: 3,
    title: "Corolla Altis – 2023",
    details: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car19-660x440.jpg",
    price: 55000,
  },
  {
    id: 4,
    title: "Ford Explorer 2023",
    details: "4.0 D5 PowerPulse Momentum 5dr AWD..",
    imageUrl: "./images/cards/car5-660x440.jpg",
    price: 73000,
  },
];
function drawItems() {
  let y = products.map((item) => {
    return `
    <div class="col-3">
    <div class="card">
      <div class="card-img">
        <img class="img-fluid" src=${item.imageUrl} alt="">
        <a class="heart" href="#"><i class="heart-icon fas fa-heart"></i></a>
        <div class="overlay">
         <div class="go">
          <a href="#">
            <i class="fas fa-long-arrow-alt-up"></i>
          <p class="mb-0">go on</p>
          </a>
         </div>
      </div>
      </div>
      <div class="card-content">
        <div class="content-header">
          <h5>${item.title}</h5>
          <p class="mb-0">${item.details}</p>
        </div>
        <div class="content-mid d-flex justify-content-between align-items-center">
          <div class="single-mid d-flex flex-column 
          justify-content-between align-items-center gap-1">
            <i class="fas fa-tachometer-alt"></i>
            <p>20 miles</p>
          </div>
          <div class="single-mid d-flex flex-column justify-content-between align-items-center">
            <i class="fas fa-gas-pump"></i>
            <p>petrol</p>
          </div>
          <div class="single-mid d-flex flex-column justify-content-between align-items-center">
            <i class="fas fa-gas-pump"></i>

            <p>Automatic</p>
          </div>
        </div>

        <div class="content-footer d-flex justify-content-between align-items-center">
          <span class="price">$${item.price}</span>
          <button class="add" onClick="addToCart(${item.id})">
              <a
                
                class="d-flex justify-content-center align-items-center gap-3"
                >Add<i class="fas fa-long-arrow-alt-up"></i
              ></a>
            </button>
          
        </div>
      </div>
    </div>
  </div>
        `;
  });
  allProducts.innerHTML = y;
}
//
drawItems();

let cartProductDiv = document.querySelector(".carts_products div");
let badge = document.querySelector(".badge");

// let addedItem = [];
let addedItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

if (addedItem) {
  addedItem.map((item) => {
    cartProductDiv.innerHTML += `<p>${item.title}</p>`;
  });
  badge.style.display = "block";
  badge.innerHTML = addedItem.length;
}

if ((localStorage.getItem = "username")) {
  function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);
    cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

    addedItem = [...addedItem, choosenItem];
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
    let cartProductsLength = document.querySelectorAll(".carts_products div p");
    // console.log(cartProductsLength.length)
    badge.style.display = "block";
    badge.innerHTML = cartProductsLength.length;
  }
} else {
  window.location = "login.html";
}

//////////////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart");
let cartsProducts = document.querySelector(".carts_products");
shoppingCartIcon.addEventListener("click", opencart);

function opencart() {
  if (cartProductDiv.innerHTML != "") {
    if (cartsProducts.style.display == "block") {
      cartsProducts.style.display = "none";
    } else {
      cartsProducts.style.display = "block";
    }
  }
}
///////////////////////////////////////////////////////////////////////
