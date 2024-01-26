// let ProductsInCart = localStorage.getItem("ProductsInCart");
let allProducts = document.querySelector("#cart-js");
let noProducts = document.querySelector(".no-products");

// if (ProductsInCart) {
//   let item = JSON.parse(ProductsInCart);
//   drawCartProducts(item);
// }

function drawCartProducts(totalProducts = []) {
  if (JSON.parse(localStorage.getItem("ProductsInCart")).length === 0) {
    noProducts.innerHTML = "There is no items !";
  }

  let products =
    JSON.parse(localStorage.getItem("ProductsInCart")) || totalProducts;
  let y = products.map((item) => {
    return `
    <div class="row cart-items align-items-center justify-content-center">
    <div class="col-8">
       <div class="img">
        <img class="img-fluid cart-imgs" src=${item.imageUrl} alt="">
       </div>
    </div>
    <div class="col-3 text-center">
       <h3>$${item.price}</h3>
    </div>
    <div class="col-1">
        <i class="fas fa-trash" onclick="removeFromCart(${item.id})"></i>
    </div>
    
</div>`;
  });

  allProducts.innerHTML = y;
}
drawCartProducts();

function removeFromCart(id) {
  let ProductsInCart = localStorage.getItem("ProductsInCart");
  if (ProductsInCart) {
    let items = JSON.parse(ProductsInCart);

    let filteredItem = items.filter((i) => i.id !== id);

    localStorage.setItem("ProductsInCart", JSON.stringify(filteredItem));
    drawCartProducts(filteredItem);
  }
}
