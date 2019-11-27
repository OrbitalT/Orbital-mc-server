var fs = require('fs');

//read
fs.readFile('D:\\code\\Orbital-mc-server\\servers\\1.14.4\\test\\data.txt', 'utf8', function(err, data) {
  console.log(data);
});

//write
fs.writeFileSync('D:\\code\\Orbital-mc-server\\servers\\1.14.4\\test\\datatest.txt', data);
