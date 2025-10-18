// fs - filesystem
const fs = require("fs");

// CRUD Application
setTimeout(() => {
  // File created
  fs.writeFileSync("hello.txt", "Hello! This is from Node JS");

  // Read file
  setTimeout(() => {
    const readFile = fs.readFileSync("hello.txt", "utf-8");
    console.info("Read: ", readFile);

    // Update file
    setTimeout(() => {
      fs.writeFileSync("hello.txt", "This is updated By Node JS");
      console.info("File updated");

      // Delete file
      setTimeout(() => {
        fs.unlinkSync("hello.txt");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// console.log(fs);
