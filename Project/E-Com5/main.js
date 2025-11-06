// Header Element
const headerEl = document.querySelector("header");
// Main Element
const mainEl = document.querySelector("main");
// Cart or Aside Element
const asideEl = document.querySelector("aside#cart");

let products = {};

// Cart database
let cart = [];

// Fetch the data.json
async function fetchData() {
  try {
    const res = await fetch("./assets/data.json");
    const data = await res.json();
    products = data;
    // console.info(products);
    renderProductName(products);

    const firstProduct = Object.keys(data)[0];
    // console.info(firstProduct);
    renderTheProductName(firstProduct);
    renderProducts(data[firstProduct]);
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
const selectCategory = shopEl.querySelector("#productCategory");
function renderProductName(product) {
  // console.info(product)

  selectCategory.innerHTML = `<option disabled selected>Select a product</option>`;

  selectCategory.innerHTML = `
    ${Object.keys(product).map(
      (key) => `
        <option class="capitalize" value="${key}">${key}</option>
      `
    )}
  `;
  const selectCategoryOpt = selectCategory.querySelectorAll("option");
  // console.info(selectCategoryOpt);

  selectCategoryOpt.forEach((item) => {
    item.addEventListener("click", () => {
      const productName = item.value;
      console.info(productName);
      renderTheProductName(productName);
      renderProducts(product[productName]);
    });
  });
}

const productNameEl = shopEl.querySelector("#productName");

function renderTheProductName(name) {
  productNameEl.textContent = name;
}

function renderProducts(products) {
  const productCards = shopEl.querySelector("#productCards");

  productCards.innerHTML = `
    ${products
      .map(
        (item) => `
        <figure>
            <div>
              <img src="${item.Image[0].url}?random=${item.id}" alt="" />
            </div>
            <figcaption>
              <table>
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>${item.name}</td>
                  </tr>
                  <tr>
                    <th>Brand:</th>
                    <td>Brand Name</td>
                  </tr>
                  <tr>
                    <th class="flex">Description:</th>
                    <td >
                      <p class="line-clamp-1">${item.description}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Stock</th>
                    <td>In Stock</td>
                  </tr>
                  <tr>
                    <th>Price:</th>
                    <td>Product Price</td>
                  </tr>
                  <tr>
                    <td>
                      <button id="addToCart" data-cartitem=${encodeURIComponent(
                        JSON.stringify(item)
                      )} class="outline w-full ">Add</button>
                    </td>
                    <td>
                      <button id="viewCartItem" class="outline w-full ">View</button>
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

  const addToCart = shopEl.querySelectorAll("#addToCart");

  addToCart.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const cartData = JSON.parse(decodeURIComponent(item.dataset.cartitem));
      const isCartExist = cart.some((i) => i.id === cartData.id);
      // console.info(isCartExist)

      if (isCartExist) {
        alert("Already cart exist!");
        return;
      } else {
        cart.push(cartData);
        console.info(cartData);
        cartItems(cart);
      }
    });
  });

  const viewCartItem = shopEl.querySelectorAll("#viewCartItem");

  viewCartItem.forEach((view) => {
    view.addEventListener("click", () => {
      navigatePage("view");
    });
  });
}

function cartItems(cart) {
  const viewCart = asideEl.querySelector("#cartItems");

  viewCart.innerHTML = `
    ${
      cart.length > 0 &&
      cart.map(
        (item, idx) => `
        <ul>
          <li class="flex items-center gap-2">
            <div>${idx + 1}</div>
            <div>
              <img src="${item.Image[0].url}?random=${item.id}" alt="">
            </div>
            <div>
              <p>${item.name}</p>
              <div>
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      `
      )
    }
  `;
}
