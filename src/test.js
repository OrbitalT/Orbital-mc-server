const fs = require('fs');

fs.readFile('D:\\code\\Orbital-mc-server\\src\\data.json', 'utf8', function(err, list) {
  console.log(JSON.parse(list));
});
