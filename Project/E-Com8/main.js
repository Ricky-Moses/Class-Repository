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

      // console.info(cartObj);
      arrOfCart.push(cartObj);
      localStorage.setItem("Cart", JSON.stringify(arrOfCart))
    });
  });
}
