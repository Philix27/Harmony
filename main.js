const { app, BrowserView, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    backgroundColor: "#ffff",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  //   win.loadURL("https://youtube.com");
}

// app.whenReady().then(() => {
//   createWindow();

//   app.on("activate", () => {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.whenReady().then(() => {
//   createWindow();
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });
