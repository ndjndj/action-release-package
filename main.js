const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');


let mainWindow;

const dirPath = '.';

// "path/to/target" 直下のファイルやディレクトリ全てがDirentオブジェクトの配列で返ってくる
const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });

const fileNames = allDirents.filter(dirent => dirent.isFile()).map(({ name }) => name);

console.log(typeof fileNames);

console.log(fileNames);

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600, webPreferences: {nodeIntegration: true} });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // 開発ツールを有効化
    mainWindow.webContents.openDevTools();
    
    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

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


exports.exampleRemote = function () {
    console.log('main process');
};