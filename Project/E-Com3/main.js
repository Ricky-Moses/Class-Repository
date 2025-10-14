import Products from "./assets/Products.js";

const headerEl = document.querySelector("header");

document.querySelector("#clickBar").addEventListener("click", () => {
  headerEl.style.height = headerEl.style.height === "7vh" ? "30vh" : "7vh";
});

// ? Single page navigation
const menuList = headerEl.querySelectorAll("nav #menu li");
const pageEl = document.querySelectorAll("main section");

function showPages(pageID = "home") {
  pageEl.forEach((pages) => {
    pages.style.display = pages.id === pageID ? "block" : "none";
  });
}

showPages("shop");

menuList.forEach((item) => {
  item.addEventListener("click", () => {
    const listId = item.dataset.id;

    showPages(listId);
  });
});

