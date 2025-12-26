const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

// Fetch data from 'data.json'
async function fetchData() {
  try {
    const res = await fetch("./asset/data.json");
    const data = await res.json();
    renderData(data);
    // console.info(data);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Show pages function
const allPages = mainEl.querySelectorAll("section");
// console.info(allPages);

// Show pages (Function)
function showPages(pageId) {
  allPages.forEach((pages) => {
    pages.style.display = pages.id === pageId ? "block" : "none";
  });
}

showPages("shop");

// Click to 'home' page
const homePage = headerEl.querySelector("h1");
homePage.addEventListener("click", () => {
  showPages(homePage.dataset.page);
});

// Click to show pages
const navLi = headerEl.querySelectorAll("ul li");
navLi.forEach((list) => {
  list.addEventListener("click", () => {
    const pageId = list.dataset.page;

    showPages(pageId);
  });
});

// Show cart (Function)
function showCart(display) {
  asideEl.classList.toggle(display);
}

const isCartOpen = headerEl.querySelector("i");
isCartOpen.addEventListener("click", () => {
  showCart("!block");
});

// Cart item (Function)
function cartItems() {
  const ulEl = asideEl.querySelector("ul");
}

// Render data (Function)
const shopPage = mainEl.querySelector("#shop");
function renderData(data) {
  // console.info(data);
  const ulEl = shopPage.querySelector("ul");

  const firstKey = Object.keys(data)[1]
  // console.info(firstKey)
  productCard(data[firstKey])

  ulEl.innerHTML = `
    ${Object.keys(data)
      .map(
        (keyName) => `
        <li class="capitalize" data-key="${keyName}">${keyName
          .split("_")
          .join(" ")}</li>
      `
      )
      .join("")}
  `;

  const navigateProduct = ulEl.querySelectorAll("li");
  // console.info(navigateProduct)
  navigateProduct.forEach((list) => {
    list.addEventListener("click", () => {
      productCard(data[list.dataset.key]);
    });
  });
}

// Shop product card (Function)
function productCard(data) {
  console.info(data)
  const cardContainer = shopPage.querySelector("#cardContainer");

  cardContainer.innerHTML = `
    ${data && data.map((item) => `
        <figure>
          <div class="">
            <img src="${item.images[0].url}" alt="">
          </div>
          <figcaption>
            <table class="w-full [&_td]:p-2">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>${item.name}</td>
                </tr>
                <tr>
                  <td>Brand: </td>
                  <td>${item.brand}</td>
                </tr>
                <tr>
                  <td>Description: </td>
                  <td>
                    <p class="line-clamp-1">${item.description}</p>
                  </td>
                </tr>
                <tr>
                  <td>Price: </td>
                  <td>${(item.price * 90).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>
                    <button class="outline w-full text-lime-500 hover:bg-lime-500 hover:text-white">View</button>
                  </td>
                  <td>
                    <button class="outline w-full text-sky-500 hover:bg-sky-500 hover:text-white">Add To Cart</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </figcaption>
        </figure>
    `).join("")}
  `
}
