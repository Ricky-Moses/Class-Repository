// console.info("Hello World")

const FS = require("fs");

// Create
FS.writeFile("plain.txt", "This is plain text file", () => {
  console.info("File successfully created!");
  setTimeout(() => {
    // Read
    FS.readFile("plain.txt", "utf-8", (err, data) => {
      console.info("File read: ", data);
      setTimeout(() => {
        // Update
        FS.writeFile("plain.txt", "This file modified", () => {
          console.info("File is modified!");
          setTimeout(() => {
            // Delete
            FS.unlink("plain.txt", () => {
              console.info("File successfully deleted!");
            });
          }, 2000);
        });
      }, 2000);
    });
  }, 2000);
});
