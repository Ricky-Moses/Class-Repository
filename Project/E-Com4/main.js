const header = document.querySelector("header");
const main = document.querySelector("main");

// Menus
const menuList = header.querySelectorAll("ul li");
// Pages
const pageList = main.querySelectorAll("main section");

function showPages(pageID = "home") {
  pageList.forEach((pages) => {
    pages.style.display = pages.id === pageID ? "flex" : "none";
  });
}

showPages("shop");
