const {app, BrowserWindow, Menu, Tray} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let tray = null;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  console.log('L17: createWindow, process.env.COMPUTERNAME.toString()', process.env.COMPUTERNAME.toString());

  // and load the index.html of the app.
  if (process.env.DEBUG) {
    console.log('L: createWindow, process.env.DEBUG', process.env.DEBUG);
    win.loadURL(`http://localhost:4200`);
  } else {
    win.loadURL(`file://${__dirname}/dist/LMCElectron/index.html`);
  }

  // Open the DevTools.
  // win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})

app.whenReady().then(() => {
  tray = new Tray('./src/favicon.ico')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Visit LandmanCentral.com', click: function ()  {
      createBrowserWindow()
      } },
    { label: 'Item2', type: 'radio' },
    { label: 'Exit LMC Tray', type: 'radio'},
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
