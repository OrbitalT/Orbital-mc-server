const electron = require('electron');
const url = require('url');
const path = require('path');
var cmd = require('node-command-line'),
  Promise = require('bluebird');
var fs = require('fs');

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

let mainWindow;

// ready
app.on('ready', function() {
  // Create new main window
  mainWindow = new BrowserWindow({webPreferences: {nodeIntegration: true},width: 1250,height: 750});
  //Load html
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
  //quit app full
  mainWindow.on('closed', function() {
    app.quit();
  });

  //adds temp
  const mainMenu = Menu.buildFromTemplate(mainWindowTemplate);

  Menu.setApplicationMenu(mainMenu);
});

//installing server files version 1.14.4 and making data file
ipcMain.on('item:mp3', function(e, item) {
  Promise.coroutine(function *() {
    const direct = 'servers\\1.14.4\\' +item;
    yield cmd.run('mkdir ' +direct);
//    yield cmd.run('java -jar 1.14.4.jar --installServer=' +direct);
    fs.writeFileSync(direct + '\\data.txt', item);
    fs.writeFileSync('src/data.js', '\n' + item)
//    fs.writeFileSync(, item)
  })();
});

//menu temp
const mainWindowTemplate = [{
  label: 'File',
  submenu: [{
    label: 'Quit',
    accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
    click() {
      app.quit();
    }
  }]
}];

//mac support
if (process.platform == "darwin") {
  mainMenuTemp.unshift({});
}

//dev tool
if (process.env.NODE_ENV !== 'production') {
  mainWindowTemplate.push({
    label: "Dev Tools",
    submenu: [{
        label: 'Toggle Devtools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}
