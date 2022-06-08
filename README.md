# EarSwitch-Dashboard

**A simple dashboard for use with an EarSwitch device or other AAC device.**

![UNgYDvsJRp](https://user-images.githubusercontent.com/19939916/172671116-14192ac6-fb1a-43d2-911a-d03aaf0d566a.png)

This is an extensible, proof-of-concept dashboard built on [Electron](https://www.electronjs.org/) and [Material Design for Bootstrap](https://mdbootstrap.com/) that places a number of basic features in a clear and easy-to-reach layout.

Current and possible future features include:
- Smart light control
- Temperature and climate controls (currently unimplemented)
- Music controls (placeholder embed for now)
- Accessibility software (e.g. EarSwitch software) launcher (unimplemented)
- On-screen keyboard launcher
- Color configuration (limited implementation)

As of right now, this application has only been tested on Windows 10 machines (and win10's osk.exe), and has only been configured to work with Philips Hue devices.

Developed in collaboration with @rsingh84 and @n2pham.

For more information about the EarSwitch device, check out the [website](https://www.earswitch.co.uk/) or the original Hackaday.io [project](https://hackaday.io/project/169110-earswitch-assistive-technology-switch-new-hci).


## To Use

Check out our (early) demonstration video [here](https://www.youtube.com/watch?v=c9ZLN3ExBCw)!

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/philisophic/EarSwitch-Dashboard
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Credits
Overlay transition animations were adapted from sample implementations given by [Codrops](https://github.com/codrops/FullscreenOverlayStyles).

All icons were used with permission from [Flaticon.com](https://www.flaticon.com/).
