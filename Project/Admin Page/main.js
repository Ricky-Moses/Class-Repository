const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
let userLocalStorage = {};
let productLocalStorage = JSON.parse(localStorage.getItem("Products")) || [];

const mainPages = mainEl.querySelectorAll("main section");

function showPages(pageId = "home") {
  mainPages.forEach((pages) => {
    pages.style.display = pages.id === pageId ? "flex" : "none";
  });
}

showPages("home");

const menuList = headerEl.querySelectorAll("nav ul li");

menuList.forEach((li) => {
  li.addEventListener("click", () => {
    console.info(li.dataset.id);
    const pageId = li.dataset.id;
    showPages(pageId);
  });
});

// Shop pages
function showProductContainer() {
  const shopContainer = mainEl.querySelector("#shop");
  shopContainer.style.display = "grid";
  if (productLocalStorage.length > 0) {
    shopContainer.innerHTML = `
        ${productLocalStorage
          .map(
            (item) => `
                <figure>
                    <div class="img-container">
                        <img src="${
                          item.images
                        }" class="w-full h-full object-fit-cover" alt="">
                    </div>
                    <figcaption>
                        <table class="border w-full">
                            <tbody>
                                <tr>
                                    <th class="text-start p-2">Name</th>
                                    <td class=" p-2">${item.name}</td>
                                </tr>
                                <tr>
                                    <th class="text-start p-2">Brand</th>
                                    <td class=" p-2">${item.brand}</td>
                                </tr>
                                <tr>
                                    <th class="text-start p-2">Price</th>
                                    <td class=" p-2">₹${item.price}</td>
                                </tr>
                                <tr>
                                    <th class="text-start p-2">Stock</th>
                                    <td class=" p-2">${
                                      item.stock ? "In stock" : "Out of stock"
                                    }</td>
                                </tr>
                                <tr>
                                    <th class="text-start p-2">Description</th>
                                    <td class=" p-2">${item.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </figcaption>
                </figure>
            `
          )
          .join("")}
     `;
  } else {
    shopContainer.innerHTML = `<h1>No Product Exists</h1>`;
  }
}

showProductContainer();

// Form for Registration and Login
const formSection = mainEl.querySelector("section:nth-child(3)");
const registerForm = formSection.querySelector("section #register");
const loginForm = formSection.querySelector("section #login");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formFormat = new FormData(registerForm);
  const newUserData = Object.fromEntries(formFormat);
  //   console.info(newUserData);

  userLocalStorage = newUserData;

  localStorage.setItem("User", JSON.stringify(userLocalStorage));
  loginPages("login");
  //   registerForm.reset();
});

const directLoginBtn = registerForm.querySelector("input[type='button']");

directLoginBtn.addEventListener("click", () => {
  loginPages("login");
});

function loginPages(formPage) {
  const forms = formSection.querySelectorAll("form");
  //   console.info(forms);

  forms.forEach((pages) => {
    pages.style.display = pages.id === formPage ? "flex" : "none";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formFormat = new FormData(loginForm);
    const userData = Object.fromEntries(formFormat);

    const storedUser = JSON.parse(localStorage.getItem("User"));

    if (storedUser) {
      if (
        storedUser.email === userData.email &&
        storedUser.password === userData.password
      ) {
        console.info("Okay");

        adminPage();
        // loginForm.reset();
      } else {
        console.error("Invalid Credential");
      }
    } else {
      console.warn("Need to register first user!");
    }
  });
}

function adminPage() {
  if (document.querySelector("header nav ul li[data-id='admin']")) return;
  const adminLi = document.createElement("li");
  adminLi.dataset.id = "admin";
  adminLi.textContent = "Admin";
  adminLi.className = "cursor-pointer";

  const newLi = headerEl.querySelector("nav ul");
  newLi.appendChild(adminLi);

  adminLi.addEventListener("click", () => {
    showPages("admin");
    sectionAdmin();
  });
}

function sectionAdmin() {
  const adminSectionForm = mainEl.querySelector("#admin form");

  function handleSubmitProduct(e) {
    e.preventDefault();

    const formFormat = new FormData(adminSectionForm);
    const objFormat = Object.fromEntries(formFormat);

    // console.info(finalProduct);
    productLocalStorage.push(objFormat);
    localStorage.setItem("Products", JSON.stringify(productLocalStorage));

    adminSectionForm.reset();
  }

  adminSectionForm.addEventListener("submit", handleSubmitProduct);
}
