const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow(({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }));
  // and load the index.html of the app.

  if (process.env.DEBUG) {
    // load from running server on port 4200
    win.loadURL(`http://localhost:4200`);
  } else {
    // load production build from the "dist" folder
    win.loadURL(`file://${__dirname}/dist/LMCelectron/index.html`);
  }


  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})
