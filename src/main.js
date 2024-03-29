const { app, BrowserWindow } = require("electron");
const {installExtension, REACT_DEVELOPER_TOOLS} = require("electron-devtools-installer");
const path = require('path');

let mainWindow;
const isDevMode = process.execPath.match(/[\\/]electron/);

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(path.join(__dirname, 'index.html'));

  mainWindow.setMenu(null);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
