// Header Element
const headerEl = document.querySelector("header");
// Main Element
const mainEl = document.querySelector("main");
// Cart or Aside Element
const asideEl = document.querySelector("aside#cart");

let products = {};

// Fetch the data.json
async function fetchData() {
  try {
    const res = await fetch("./assets/data.json");
    const data = await res.json();
    products = data;
    // console.info(products);
    renderProductName(products);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Home
const homeEl = mainEl.querySelector("#home");
const shopEl = mainEl.querySelector("#shop");
const profileEl = mainEl.querySelector("#profile");

// Function to open header
headerEl.querySelector("#toggleHeader").addEventListener("click", () => {
  headerEl.classList.toggle("h-[53px]");
});

// Function to navigate page
function navigatePage(pageID = "home") {
  mainEl.querySelectorAll("section").forEach((pages) => {
    pages.style.display = pages.id === pageID ? "flex" : "none";
  });
}

navigatePage("shop");

// Home navigation
headerEl.querySelector("h1").addEventListener("click", () => {
  navigatePage("home");
});

// Shop and Profile navigation
headerEl.querySelectorAll("nav ul li").forEach((li) => {
  li.addEventListener("click", () => {
    const dataId = li.dataset.page;
    // console.info(dataId);
    navigatePage(dataId);
  });
});

// Cart click function

const isOpenCart = headerEl.querySelector("#openCart");
const isCloseCart = asideEl.querySelector("#closeCart");

function toggleCart(actionType) {
  asideEl.classList.toggle("left-0", actionType);
}

isOpenCart.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCart(true);
});

isCloseCart.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCart(false);
});

asideEl.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  toggleCart(false);
});

// Render product name
function renderProductName(product) {
  // console.info(product)
  const selectCategory = shopEl.querySelector("#productCategory");

  selectCategory.innerHTML = `<option disabled selected>Select a product</option>`;

  selectCategory.innerHTML = `
    ${Object.keys(product).map(
      (key) => `
        <option class="capitalize" value="${key}">${key}</option>
      `
    )}
  `;
}
