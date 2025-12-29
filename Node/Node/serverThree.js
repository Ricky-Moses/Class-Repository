// console.log("Hello")
// console.log(document);

const FS = require("fs");
// console.info(FS)
const textContent = "This is text file";
const updateContent = "This content is updated";

setTimeout(() => {
  FS.writeFile("hello.txt", textContent, () => {
    console.info("File successfully created");

    setTimeout(() => {
      FS.readFile("hello.txt", "utf-8", (err, data) => {
        console.info(data);

        setTimeout(() => {
          FS.writeFile("hello.txt", updateContent, () => {
            console.info("File successfully updated");

            setTimeout(() => {
              FS.unlink("hello.txt", () => {
                console.info("File deleted");
              });
            }, 2000);
          });
        }, 2000);
      });
    }, 2000);
  });
}, 2000);
