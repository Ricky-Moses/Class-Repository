// Header Element
const headerEl = document.querySelector("header");
// Main Element
const mainEl = document.querySelector("main");
// Cart or Aside Element
const asideEl = document.querySelector("aside");

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
    console.info(dataId);
    navigatePage(dataId);
  });
});

// Cart click function
headerEl.querySelector("#cartIcon").addEventListener("click", () => {
  asideEl.style.display = asideEl.style.display === "none" ? "block" : "none";
});
