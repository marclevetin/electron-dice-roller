const { app, BrowserWindow } = require("electron");

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
        }
    });
    win.loadFile("index.html");
    win.webContents.openDevTools()
}


app.on("ready", createWindow);
