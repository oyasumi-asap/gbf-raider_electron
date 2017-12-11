var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
const ipcMain = require('electron').ipcMain;

var mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    frame: false,
    resizable: false,
    width: 510,
    height: 500,
    nodeIntegration: false
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', function(){
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('restore', function (e, arg) {
  createWindow();
});

ipcMain.on('stop', function (e, arg) {
  app.quit();
});
