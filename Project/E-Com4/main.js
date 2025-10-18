import products from "./assets/Product.js";
const header = document.querySelector("header");

const main = document.querySelector("main");

// Menus
const menuList = header.querySelectorAll("ul li");
// home
const homeEl = header.querySelector("[data-id='home']");
// Pages
const pageList = main.querySelectorAll("main section");

function showPages(pageID = "home") {
  pageList.forEach((pages) => {
    pages.style.display = pages.id === pageID ? "block" : "none";
  });
}

showPages("shop");

// Navigate to 'home'
homeEl.addEventListener("click", () => {
  const pageID = homeEl.dataset.id;
  showPages(pageID);
});

// Navigate to 'shop' & 'profile'
menuList.forEach((list) => {
  list.addEventListener("click", () => {
    console.info(list.dataset.id);
    const pageID = list.dataset.id;
    showPages(pageID);
  });
});

let selectedProducts = products;

// Card container
const shop = main.querySelector("#shop");
const shopCard = shop.querySelector(".card-container");

function selectedCardContainer(products) {
  shopCard.innerHTML = `
  ${products
    .map(
      (item) => `
      <figure class="card h-auto">
            <div class="card-img img-fluid">
              <img src="${item.image[0].url}" alt="" />
            </div>
            <figcaption class="card-body">
              <table class="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>${item.name}</td>
                  </tr>
                  <tr>
                    <th>Brand</th>
                    <td>${item.brand}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>₹${item.price}</td>
                  </tr>
                  <tr>
                    <th>Stock</th>
                    <td style="color: ${
                      item.inStock ? "greenyellow" : "orangered"
                    }">${item.availability}</td>
                  </tr>
                </tbody>
              </table>
            </figcaption>
          </figure>
    `
    )
    .join("")}
`;
}
selectedCardContainer(selectedProducts.mobile);

const asideLi = shop.querySelectorAll("aside ul li");

function listItemToSelect() {
  asideLi.forEach((li) => {
    li.addEventListener("click", () => {
      // console.info(li.dataset.item);
      const itemId = li.dataset.item;
      selectedCardContainer(selectedProducts[itemId]);

      li.querySelector("span").textContent = selectedProducts[itemId].length;
    });
  });
}

listItemToSelect();
