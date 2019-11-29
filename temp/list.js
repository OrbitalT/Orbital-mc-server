const fs = require('fs');

fs.readFile('D:\\code\\Orbital-mc-server\\temp\\object.json', 'utf8', function(err, list) {
  console.log(list);
});
