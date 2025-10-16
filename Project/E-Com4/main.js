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

showPages("home");

// Navigate to 'home'
homeEl.addEventListener("click", () => {
  const pageID = homeEl.dataset.id;
  showPages(pageID);
});

// Navigate to 'shop' & 'profile'
menuList.forEach((list) => {
  list.addEventListener("click", () => {
    console.info(list.dataset.id)
    const pageID = list.dataset.id;
    showPages(pageID);
  });
});

console.log(homeEl);
