const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");

// Show pages function
const allPages = mainEl.querySelectorAll("section");
// console.info(allPages);
function showPages(pageId) {
  allPages.forEach((pages) => {
    pages.style.display = pages.id === pageId ? "block" : "none";
  });
}

showPages("home");

// Click to show pages
const navLi = headerEl.querySelectorAll("ul li");
navLi.forEach((list) => {
  list.addEventListener("click", () => {
    const pageId = list.dataset.page;

    showPages(pageId);
  });
});
