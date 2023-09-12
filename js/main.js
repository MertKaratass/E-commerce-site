import headerFunc from "./header.js";
import productFunc from "./products.js";

//! add product to localStorage
async function getdata() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}
getdata();

const products = localStorage.getItem("products");

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";