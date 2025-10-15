// ? require() to core modules

const fs = require("fs");
const fileName = "file.txt";
const fileContent = "This from Node JS";
const updateContent = "This Updated content from Node  JS";

// console.info(fs);

// CRUD Operation

// TODOS: Create
fs.writeFile(fileName, fileContent, () => {
  console.info("File created!");

  // * Read file
  fs.readFile(fileName, "utf-8", () => {
    console.info("File Read!");
  });

  setTimeout(() => {
    // ? Update file
    fs.writeFile(fileName, updateContent, () => {
      console.info("File updated!");
    });

    // ! Delete file
    setTimeout(() => {
      fs.unlink(fileName, () => {
        console.info("File deleted!");
      });
    }, 3000);
  }, 3000);
});
