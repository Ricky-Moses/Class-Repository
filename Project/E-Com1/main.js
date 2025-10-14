import productData from "./asset/product.js";

const headerEl = document.querySelector("header");
const pageList = Array.from(document.querySelectorAll("main section"));

// * Function to show page when clicked
function showPages(pageId = "home") {
  pageList.forEach((pages) => {
    pages.style.display = pages.id === pageId ? "block" : "none";
  });
}

showPages("shop"); // ! Initially 'Home'

const menuList = headerEl.querySelectorAll("nav ul li");
menuList.forEach((list) => {
  list.addEventListener("click", () => {
    const pageId = list.dataset.id;
    showPages(pageId);
  });
});

const cart = document.querySelector("#cart");
const cartClick = headerEl.querySelector(".cart-icon");
cartClick.addEventListener("click", () => {
  cart.style.display = cart.style.display === "none" ? "block" : "none";
});

// * About page

let cartItem = JSON.parse(localStorage.getItem("Cart")) || [];

function displayCard(product) {
  const cardContainer = document.querySelector(".card-container");

  cardContainer.innerHTML = `
        ${product
          .map(
            (item, idx) =>
              `
            <figure>
                <div class="img-container">
                    <img src="${item.images[0].img}" alt="" />
                </div>
                <figcaption>
                    <table>
                        <tbody>
                            <tr>
                                <th>Model: </th>
                                <td>${item.model}</td>
                            </tr>
                            <tr>
                                <th>Brand: </th>
                                <td>${item.brand}</td>
                            </tr>
                            <tr>
                                <th>Stock: </th>
                                <td style="color: ${
                                  item.inStock ? "greenyellow" : "red"
                                }">${item.availability}</td>
                            </tr>
                            <tr>
                                <th>Price: </th>
                                <td>₹ ${item.price.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th>Description: </th>
                                <td><p>${item.description}</p></td>
                            </tr>
                            <tr>
                                <td>
                                  <button class="add-to-cart" data-items="${idx}"> Add </button>
                                </td>
                                <td>
                                  <button class="view-details"> View Details </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>   
                </figcaption>
            </figure>`
          )
          .join("")}
    `;

  // ? Add to cart button
  const addToCartBtn = cardContainer.querySelectorAll(".add-to-cart");
  addToCartBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const itemId = item.dataset.items;
      cartItem.push(product[itemId]);
      localStorage.setItem("Cart", JSON.stringify(cartItem));
      displayCartItem(cartItem);
    });
  });
}

displayCard(productData);

// ? Cart List
function displayCartItem(itemList) {
  console.log(itemList);
  const cartTbody = cart.querySelector("tbody");

  cartTbody.innerHTML = `
    ${itemList
      .map(
        (item) => `
        <tr>
            <td>
              <img src="${item.images[0].img}" alt="" />
            </td>
            <td>
              <p>Samsung A20</p>
              <div class="cart-qty-btn">
                <button onclick="handleIncrease(${item.id})">+</button>
                <span>${item.qty || 1}</span>
                <button onclick="handleDecrease(${item.id})">-</button>
              </div>
            </td>
            <td>₹${((item.qty || 1) * item.price).toFixed(2)}/-</td>
            <td>
              <button onclick="handleDelete(${item.id})">Delete</button>
            </td>
        </tr>
      `
      )
      .join(" ")}
  `;
  itemTotalPrice();
}
displayCartItem(cartItem);

// ? Quantity increase
window.handleIncrease = function (id) {
  cartItem = cartItem.map((item) =>
    item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
  );

  localStorage.setItem("Cart", JSON.stringify(cartItem));
  displayCartItem(cartItem);
  itemTotalPrice();
};

// ! Quantity decrease
window.handleDecrease = function (id) {
  cartItem = cartItem.map((item) =>
    item.id === id ? { ...item, qty: (item.qty || 1) - 1 } : item
  );

  localStorage.setItem("Cart", JSON.stringify(cartItem));
  displayCartItem(cartItem);
  itemTotalPrice();
};

// TODOS: Total price
function itemTotalPrice() {
  const totalPrice = cart.querySelector(".total-cart-price");

  const total = cartItem.reduce(
    (acc, item) => acc + (item.qty || 1) * item.price,
    0
  );

  totalPrice.textContent = `₹${total.toFixed(2)}`;
}

// ! Delete item
window.handleDelete = function (id) {
  cartItem = cartItem.filter((item) => item.id !== id);

  localStorage.setItem("Cart", JSON.stringify(cartItem));
  displayCartItem(cartItem);
};

// ? Search Query

const searchBar = headerEl.querySelector("form input");

searchBar.addEventListener("input", (e) => {
  e.preventDefault();
  // console.log(e.target.value);

  const query = e.target.value.toLowerCase().trim();

  const filteredData = productData.filter((item) => {
    return (
      item.model.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query)
    )
  });

  displayCard(filteredData);
});
