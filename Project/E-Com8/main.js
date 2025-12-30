const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

// Show function
const allPages = mainEl.querySelectorAll("section");
function showPages(pageId) {
  allPages.forEach((page) => {
    // console.info(page.id);
    page.style.display = pageId === page.id ? "block" : "none";
  });
}

showPages("home");

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
