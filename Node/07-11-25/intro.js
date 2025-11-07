// Node JS is JavaScript run environment
// API, Backend
// Work outside of the browser
// Node nature asynchronous language

// Node run in Chrome V8 engine + extra feature

// Node Core module:
// 1. http
// 2. https
// 3. fs (file system)
// 4. path
// 5. os
// 6. url

// CRUD Application

const FS = require("fs");
const fileText = "This is NODE JS Class";
const updateText = "This is updated by Node class";
// require use to access the core modules

// console.info(FS)

// Create
FS.writeFile("hello.txt", fileText, () => {
  console.info("File successfully created!");

  // Read
  setTimeout(() => {
    FS.readFile("hello.txt", "utf-8", (err, data) => {
      console.info(data);
      // Data split into multiple chunk and combine into on buffer

      // Update
      setTimeout(() => {
        FS.writeFile("hello.txt", updateText, () => {
          console.info("File successfully updated!");

          // Delete
          setTimeout(() => {
                FS.unlink("hello.txt", () => {
                    console.info("File deleted successfully!")
                })
          }, 5000)
        });
      }, 1000);
    });
  }, 1000);
});
