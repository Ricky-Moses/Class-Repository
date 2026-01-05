const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

let allArrOfObj = {};
let arrOfCart = JSON.parse(localStorage.getItem("Cart")) || [];
// Fetch data from 'asset/data.json'
async function fetchData() {
  try {
    const res = await fetch("./asset/data.json");
    const data = await res.json();
    // console.info(data)
    renderData(data);
    allArrOfObj = data;
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Show function
const allPages = mainEl.querySelectorAll("section");
function showPages(pageId) {
  allPages.forEach((page) => {
    // console.info(page.id);
    page.style.display = pageId === page.id ? "block" : "none";
  });
}

showPages("shop");

// Navigate to 'home' page
const homePage = headerEl.querySelector("h1");
homePage.addEventListener("click", () => {
  showPages("home");
});

// Click to navigate page
const navList = headerEl.querySelectorAll("nav ul li");
navList.forEach((list) => {
  list.addEventListener("click", () => {
    showPages(list.dataset.page);
  });
});

// Click to cart open function
const cartOpen = headerEl.querySelector("i");
cartOpen.addEventListener("click", () => {
  asideEl.classList.toggle("!block");
});

// 'Shop' functionality
const shopPage = mainEl.querySelector("#shop");

// Navigate product data
const shopUl = shopPage.querySelector("ul");

function renderData(data) {
  // console.info(Object.keys(data))
  shopUl.innerHTML = `
    ${Object.keys(data)
      .map(
        (list) => `
        <li class="capitalize cursor-pointer" data-key="${list}">${list
          .split("_")
          .join(" ")}</li>
      `
      )
      .join("")}
  `;

  const firstKey = Object.keys(data)[0];
  // console.info(firstKey)
  productCard(data[firstKey]);

  const shopLi = shopUl.querySelectorAll("li");
  // console.info(shopLi)
  shopLi.forEach((li) => {
    li.addEventListener("click", () => {
      // console.info(); li.dataset.key
      productCard(data[li.dataset.key]);
    });
  });
}

const cardContainer = shopPage.querySelector("#cardContainer");

function productCard(products) {
  // console.info(products)
  cardContainer.innerHTML = `
    ${products
      .map(
        (card) => `
        <figure>
          <div>
            <img className="" src="${card.images[0].url}" />
          </div>
          <figcaption>
            <table class=" w-full [&_td]:p-2">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>${card.name}</td>
                </tr>
                <tr>
                  <td>Brand: </td>
                  <td>${card.brand}</td>
                </tr>
                <tr>
                  <td>Description: </td>
                  <td>
                    <p class="line-clamp-1">${card.description}</p>
                  </td>
                </tr>
                <tr>
                  <td>Price: </td>
                  <td>${(card.price * 90).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>
                    <button class="outline text-lime-500 w-full hover:bg-lime-500 hover:text-white">View</button>
                  </td>
                  <td>
                    <button id="addToCart" data-itemid="${
                      card.id
                    }" class="outline text-sky-500 w-full hover:bg-sky-500 hover:text-white">Add To Cart</button>
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

  const cartBtn = cardContainer.querySelectorAll("#addToCart");

  cartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.itemid;
      // console.info( typeof id);
      // console.info(typeof 1)

      const cartObj = products.find((f) => f.id == id);

      const existCart = arrOfCart.some((item) => item.id === cartObj.id);
      // console.info(existCart)

      if (existCart) {
        alert("Selected cart already exist!");
        return;
      }

      arrOfCart.push(cartObj);
      addToCartItems(arrOfCart);
      localStorage.setItem("Cart", JSON.stringify(arrOfCart));
    });
  });
}

const cartUl = asideEl.querySelector("ul");

function addToCartItems(cartItems) {
  const nofItems = asideEl.querySelector("#nOfItems");
  cartUl.innerHTML = `
    ${cartItems
      .map(
        (item) => `
        <li class="flex items-center justify-between gap-3">
          <figure class="w-30">
            <img src="${item.images[0].url}" alt="" />
          </figure>
          <div class="flex-1">
            <h1 class="line-clamp-1">${item.name}</h1>
            <div class="flex items-center gap-5 mt-2">
              <button
              onclick="handleIncrease(${item.id})"
                class="outline w-5 rounded text-sky-400 hover:bg-sky-400 hover:text-white"
              >
                +
              </button>
              <span>${item.qty || 1}</span>
              <button
              onclick="handleDecrease(${item.id})"
                class="outline w-5 rounded text-orange-400 hover:bg-orange-400 hover:text-white"
              >
                -
              </button>
            </div>
          </div>
          <div>₹ ${(item.price * 90 * (item.qty || 1)).toFixed(2)}/-</div>
          <div>
            <button
            onclick="handleRemove(${item.id})"
              class="outline text-red-600 hover:bg-red-600 hover:text-white rounded px-2"
            >
              Remove
            </button>
          </div>
        </li>
      `
      )
      .join("")}
  `;
  totalPrice(cartItems);
  nofItems.textContent = `${cartItems.length}`;
}

addToCartItems(arrOfCart);

function handleIncrease(id) {
  // console.info(id)
  arrOfCart = arrOfCart.map((item) =>
    item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
  );
  addToCartItems(arrOfCart);
  localStorage.setItem("Cart", JSON.stringify(arrOfCart));
}

function handleDecrease(id) {
  // console.info(id)
  arrOfCart = arrOfCart.map((item) =>
    item.id === id ? { ...item, qty: (item.qty || 1) - 1 } : item
  );
  addToCartItems(arrOfCart);
  localStorage.setItem("Cart", JSON.stringify(arrOfCart));
}

function handleRemove(id) {
  arrOfCart = arrOfCart.filter((item) => item.id !== id);
  addToCartItems(arrOfCart);
  localStorage.setItem("Cart", JSON.stringify(arrOfCart));
}

function totalPrice(carts) {
  const displayTotalPrice = asideEl.querySelector("#totalPrice");

  const total = carts.reduce((acc, items) => {
    return acc + items.price * (items.qty || 1) * 90;
  }, 0);

  displayTotalPrice.textContent = `₹${total.toFixed(2)}/-`;
}
