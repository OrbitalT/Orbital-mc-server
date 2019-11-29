const fs = require('fs');

fs.readdir('D:\\code\\Orbital-mc-server\\servers\\1.14.4\\', (err, file) => {
  fs.writeFile("./object.json", JSON.stringify(file, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("File has been updated");
  });
});
