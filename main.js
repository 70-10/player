"use strict";

const app = require("app");
const BrowserWindow = require("browser-window");
const CrashReporter = require("crash-reporter");
const logger = require("log4js").getLogger("Electron");

CrashReporter.start();

let mainWindow = null;

app.on("will-finish-launching", () => {
  logger.debug("will-finish-launching");
  logger.debug(app.getLocale());
});

app.on("before-quit", () => {
  logger.debug("before-quit");
});

app.on("will-quit", () => {
  logger.debug("will-quit");
});

app.on("quit", () => {
  logger.debug("quit");
});

app.on("window-all-closed", () => {
  logger.debug("window-all-closed");
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  logger.debug("ready");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadUrl("file://" + __dirname + "/index.html");

  // mainWindow.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null
  });
});
