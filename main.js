const {app, BrowserWindow, Menu, Tray} = require('electron');

const contextMenu = Menu.buildFromTemplate([
  {label: 'cool', type: 'radio'},
])
let win;
let tray = null;

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
function createBrowserWindow() {
  win = new BrowserWindow(({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }));
  // and load the index.html of the app.


    win.loadURL(`https://landmancentral.com`);


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
