const {Menu, shell } = require('electron');
const template = [
  {
    role: 'File',
    submenu: [
      {
        label:"Visit LandmanCentral.com",
        click() {
          shell.openExternal('https://landmancentral.com');
        }
      }
    ]
  },
  {
    role: 'Edit',
    submenu: [
      {
        label:"Visit LandmanCentral.com",
        click() {
          shell.openExternal('https://landmancentral.com');
        }
      }
    ]
  },
  {
    role: 'Development',
    submenu: [
      {
        label:"Visit LandmanCentral.com",
        click() {
          shell.openExternal('https://landmancentral.com');
        }
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label:"Visit LandmanCentral.com",
        click() {
          shell.openExternal('https://landmancentral.com');
        }
      }
    ]
  },

]

const menu = Menu.buildFromTemplate(template);

module.exports = menu;
