const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeMainWorld('api', {
    title: "Green Chest Simulator by Zoltan"

});
