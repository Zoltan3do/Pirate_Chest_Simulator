const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 768,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin' ) app.quit();
})