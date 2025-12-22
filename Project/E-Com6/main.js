const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

// Show pages function
const allPages = mainEl.querySelectorAll("section");
// console.info(allPages);

// Show pages (Function)
function showPages(pageId) {
  allPages.forEach((pages) => {
    pages.style.display = pages.id === pageId ? "block" : "none";
  });
}

showPages("home");

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

const isCartOpen = headerEl.querySelector("i")
isCartOpen.addEventListener("click", () => {
  showCart("!block")
})

// Cart item (Function)
function cartItems(){
  const ulEl = asideEl.querySelector("ul")

  
}