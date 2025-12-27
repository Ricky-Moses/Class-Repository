// console.log("Hello")
// console.log(document);

const FS = require("fs");
// console.info(FS)

FS.writeFile("hello.txt", "This is text file", () => {
  console.info("File successfully created");
});
