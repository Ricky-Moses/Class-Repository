const FORM = document.querySelector("form");
const TABLE = document.querySelector("#listSection table");
// console.info(TABLE)

let storeObj = JSON.parse(localStorage.getItem("UserData")) || [];
const formFunction = () => {
  const formFormObj = new FormData(FORM);

  const obj = {};

  for (let [key, value] of formFormObj.entries()) {
    // console.info(`key: ${key} | value: ${value}`)

    obj[key] = value;
  }

  obj.id = storeObj.length + 1;

  //   console.info(obj);
  storeObj.push(obj);
  localStorage.setItem("UserData", JSON.stringify(storeObj));
  //   console.info(storeObj);
  renderList(storeObj);
};

function renderList(list) {
  const tbody = TABLE.querySelector("tbody");
  // console.info(tbody)

  tbody.innerHTML = `
        ${
          list.length > 0
            ? `
                ${list
                  ?.map(
                    (item, idx) => `
                        <tr>
                            <td>${idx + 1}</td>
                            <td>${item?.name}</td>
                            <td>
                                <button class="border p-1 px-4 rounded text-lime-500 hover:bg-lime-500 hover:text-white cursor-pointer" onclick="handleEdit(${
                                  item.id
                                })">Edit</button>
                            </td>
                            <td>
                                <button class="border p-1 px-4 rounded text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer" onclick="handleDelete(${
                                  item.id
                                })">Delete</button>
                            </td>
                        </tr>
                    `
                  )
                  .join("")}
            `
            : `
                <tr>
                    <th colspan="4" class="text-center!">No Data Found</th>
                </tr>
            `
        }
    `;
}

renderList(storeObj);

// Pending
function handleEdit(id) {
  const taskFound = storeObj.find((list) => list.id === id);
  console.info(taskFound);
}

// Delete
function handleDelete(id) {
  storeObj = storeObj.filter((list) => list.id !== id);
  renderList(storeObj);
  localStorage.setItem("UserData", JSON.stringify(storeObj));
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  formFunction();
});
