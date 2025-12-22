const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

let dataOfObj = {};
let arrOfCart = JSON.parse(localStorage.getItem("Cart")) || [];

async function fetchData() {
  try {
    const res = await fetch("./asset/data.json");
    const data = await res.json();
    dataOfObj = data;
    renderData(dataOfObj);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Click to 'Home'
const homePage = headerEl.querySelector("h1");
homePage.addEventListener("click", () => {
  showPages(homePage.dataset.page);
});

// Click to open 'cart'
const openCart = headerEl.querySelector("i");
openCart.addEventListener("click", () => {
  showCart("left-0");
});

// Show active function
const mainPages = mainEl.querySelectorAll("section");
function showPages(pageId) {
  mainPages.forEach((pages) => {
    pages.style.display = pages.id === pageId ? "block" : "none";
  });
}

showPages("shop");

// Click to show pages
const listToNavigate = headerEl.querySelectorAll("ul li");

listToNavigate.forEach((list) => {
  list.addEventListener("click", () => {
    const pageId = list.dataset.page;

    showPages(pageId);
  });
});

// Cart Page
function showCart(position) {
  asideEl.classList.toggle(position);
}

// Cart item
const cartUl = asideEl.querySelector("ul");
function addToCart(arrOfCartItems) {
  cartUl.innerHTML = `
        ${arrOfCartItems
          .map(
            (item, idx) => `
            <li class="flex items-center gap-2">
                <figure>
                    <img
                    class="w-30"
                    loading="lazy"
                    src="${item.images[0].url}"
                    alt=""
                    />
                </figure>
                <div class="flex-1">
                    <h1>${item.name}</h1>
                    <div class="flex items-center gap-3 mt-2">
                    <button onclick="handleIncreaseQty(${
                      item.id
                    })" class="outline w-5 rounded text-slate-600 hover:bg-slate-600 hover:text-white">+</button>
                    <span>${item.qty || 1}</span>
                    <button onclick="handleDecreaseQty(${
                      item.id
                    })" class="outline w-5 rounded text-slate-600 hover:bg-slate-600 hover:text-white">-</button>
                    </div>
                </div>
                <div>
                    <p>₹ ${(item.price * (item.qty || 1) * 90).toFixed(2)}/-</p>
                </div>
                <div>
                    <button onclick="handleRemove(${
                      item.id
                    })" class="outline rounded text-rose-500 hover:bg-rose-500 hover:text-white px-2">Remove</button>
                </div>
            </li>
        `
          )
          .join("")}
    `;
  totalPrice();
}

addToCart(arrOfCart);

// Handle quantity Function
function handleIncreaseQty(id) {
  // console.info("Working");
  arrOfCart = arrOfCart.map((item) =>
    item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
  );
  localStorage.setItem("Cart", JSON.stringify(arrOfCart));
  addToCart(arrOfCart);
}
function handleDecreaseQty(id) {
  // console.info("Working");
  arrOfCart = arrOfCart.map((item) =>
    item.id === id ? { ...item, qty: (item.qty || 1) - 1 } : item
  );
  localStorage.setItem("Cart", JSON.stringify(arrOfCart));
  addToCart(arrOfCart);
}

// Total price function
function totalPrice() {
  const displayTotalPrice = asideEl.querySelector("#totalPrice");
  // console.info(totalCart);
  const total = arrOfCart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1) * 90,
    0
  );

  displayTotalPrice.textContent = `₹ ${total.toFixed(2)}/-`;
}

// Handle remove cart
function handleRemove(id) {
  arrOfCart = arrOfCart.filter((item) => item.id !== id);

  localStorage.setItem("Cart", JSON.stringify(arrOfCart));
  addToCart(arrOfCart);
}

// Shop page 'renderData' function
const shopPage = mainEl.querySelector("#shop");
function renderData(data) {
  const ulEl = shopPage.querySelector("ul");

  // const liEl = document.createElement("li");
  // Object.keys(data).map((list) => {
  //   liEl.textContent += list;
  // });

  // ulEl.append(liEl);

  // === First Object key ===
  const firstKey = Object.keys(data)[0];
  if (data && Object.keys(data).length > 0) {
    productCard(data[firstKey]);
  }

  // ==== Event Handler ====

  ulEl.innerHTML = `
    ${Object.keys(data)
      .map(
        (list, idx) => `
        <li class="cursor-pointer" data-list="${list}">${list
          .split("_")
          .join(" ")}</li>
      `
      )
      .join("")}
  `;

  const liEl = ulEl.querySelectorAll("li");
  liEl.forEach((liClick) => {
    liClick.addEventListener("click", () => {
      productCard(data[liClick.dataset.list]);
    });
  });
}

function productCard(arrOfObj) {
  const cardContainer = shopPage.querySelector("#card");

  cardContainer.innerHTML = `
    ${arrOfObj
      .map(
        (cardItem) => `
        <figure class="shadow-2xl rounded-t-2xl p-1">
          <div class="">
            <img src="${cardItem.images[0].url}" class="rounded-t-2xl" alt="">
          </div>
          <figcaption>
            <table class="[&_td]:p-2">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>${cardItem.name}</td>
                </tr>
                <tr>
                  <td>Brand: </td>
                  <td>${cardItem.brand}</td>
                </tr>
                <tr>
                  <td>Stock: </td>
                  <td>
                    <p class="${
                      cardItem.inStock ? "text-emerald-500" : "text-rose-500"
                    }">${cardItem.availability}</p>
                  </td>
                </tr>
                <tr>
                  <td>Price: </td>
                  <td>₹ ${(cardItem.price * 90).toFixed(2)}</td>
                </tr>
                <tr>
                  <td class="flex">Description: </td>
                  <td>
                    <p class="line-clamp-1">${cardItem.description}</p>
                  </td>
                </tr>
                <tr>
                    <td>
                      <button  class="outline w-full text-lime-500 hover:bg-lime-500 hover:text-white">View</button>
                    </td>
                    <td>
                      <button id="addToCartItem" data-itemid="${
                        cardItem.id
                      }" class="outline w-full text-sky-500 hover:bg-sky-500 hover:text-white">Add To Cart</button>
                    </td>
                </tr>
              </tbody>
            </table>
          </figcaption>
        </figure>
      `
      )
      .join("")}
  `;

  const addCartItem = cardContainer.querySelectorAll("figure #addToCartItem");
  addCartItem.forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = btn.dataset.itemid;
      const cartFounded = arrOfObj.find((list) => list.id == itemId);

      const existCart = arrOfCart.some((cart) => cart.id === cartFounded.id);

      if (existCart) {
        alert("Cart Already Exist!");
        return;
      }

      arrOfCart.push(cartFounded);
      localStorage.setItem("Cart", JSON.stringify(arrOfCart));
      // console.info(arrOfCart);
      addToCart(arrOfCart);
    });
  });
}
