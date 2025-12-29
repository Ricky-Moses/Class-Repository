const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");

// Show function
const allPages = mainEl.querySelectorAll("section");
function showPages(pageId) {
  allPages.forEach((page) => {
    // console.info(page.id);
    page.style.display = pageId === page.id ? "block" : "none";
  });
}

showPages("shop");
