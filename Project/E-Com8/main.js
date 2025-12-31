const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");

// Fetch data from 'asset/data.json'
async function fetchData() {
  try {
    const res = await fetch("./asset/data.json");
    const data = await res.json();
    // console.info(data)
    renderData(data);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Show function
const allPages = mainEl.querySelectorAll("section");
function showPages(pageId) {
  allPages.forEach((page) => {
    // console.info(page.id);
    page.style.display = pageId === page.id ? "block" : "none";
  });
}

showPages("shop");

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

// 'Shop' functionality
const shopPage = mainEl.querySelector("#shop");

// Navigate product data
const shopUl = shopPage.querySelector("ul");

function renderData(data) {
  // console.info(Object.keys(data))
  shopUl.innerHTML = `
    ${Object.keys(data)
      .map(
        (list) => `
        <li class="capitalize cursor-pointer" data-key="${list}">${list
          .split("_")
          .join(" ")}</li>
      `
      )
      .join("")}
  `;

  const shopLi = shopUl.querySelectorAll("li");
  // console.info(shopLi)
  shopLi.forEach((li) => {
    li.addEventListener("click", () => {
      console.info(li.dataset.key);
    });
  });
}
