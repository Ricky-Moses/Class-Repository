const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

let dataOfObj = {};

async function fetchData() {
  try {
    const res = await fetch("./asset/data.json");
    const data = await res.json();
    dataOfObj = data;
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

showPages("home");

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
function addToCart() {
  cartUl.innerHTML = `
        ${Array.from({ length: 1 })
          .map(
            (item, idx) => `
            <li class="flex items-center gap-2">
                <figure>
                    <img
                    class="w-30"
                    loading="lazy"
                    src="https://picsum.photos/500/300?random=${idx}"
                    alt=""
                    />
                </figure>
                <div class="flex-1">
                    <h1>Product Name</h1>
                    <div class="flex items-center gap-3 mt-2">
                    <button class="outline w-5 rounded text-slate-600 hover:bg-slate-600 hover:text-white">+</button>
                    <span>0</span>
                    <button class="outline w-5 rounded text-slate-600 hover:bg-slate-600 hover:text-white">-</button>
                    </div>
                </div>
                <div>
                    <p>₹ 17000/-</p>
                </div>
                <div>
                    <button class="outline rounded text-rose-500 hover:bg-rose-500 hover:text-white px-2">Remove</button>
                </div>
            </li>
        `
          )
          .join("")}
    `;
}

addToCart();
