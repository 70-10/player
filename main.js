"use strict";

const app = require("app");
const BrowserWindow = require("browser-window");
const CrashReporter = require("crash-reporter");

CrashReporter.start();

let mainWindow = null;

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadUrl("file://" + __dirname + "/index.html");

  mainWindow.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null
  });
});
