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

// Card container
const shop = main.querySelector("#shop > div");

shop.innerHTML = `
  ${products.mobile
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
