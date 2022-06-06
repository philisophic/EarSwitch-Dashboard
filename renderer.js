// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// Requires download path to be entered
const DownloadsPath = 'C:\\Users\\chanh\\Downloads\\'
const content = '0';
const fs = require('fs');
setInterval(function(){
  fs.readFile(DownloadsPath + 'hello.txt', 'utf8', (err, data) => {
    if (err || data =='0') {
      console.log("keyboard not pressed");
      return;
    }
    else{
      var child_process = require('child_process').exec;
      child_process('start osk.exe'); 
      
      fs.unlinkSync(DownloadsPath + 'hello.txt');
    }
  });
}, 1000)

