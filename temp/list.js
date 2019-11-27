const fs = require('fs');

fs.readdir('D:\\code\\ORbital-mc-server\\servers\\1.14.4\\', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
