const fs = require('fs');

fs.readdir('D:\\code\\Orbital-mc-server\\servers\\1.14.4\\', (err, files) => {
  files.forEach(function(file) {
    // Do whatever you want to do with the file
    console.log(file);
  });

  // fs.writeFile("./object.json", JSON.stringify(file, null, 2), (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   };
  //   console.log("File has been updated");
  // });
});
