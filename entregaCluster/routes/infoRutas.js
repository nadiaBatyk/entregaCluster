const Router = require("express");
const router = Router();
const parseArgs = require("minimist");
const os = require("os");

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("layouts\\login", { layout: "login" });
  }
}
//cuando le pegan al endpoint / render index.hbs
router.get("/", (req, res) => {
  let data = {
    args: parseArgs(process.argv.slice(2)),
    nombre: process.platform,
    version: process.version,
    memoria: process.memoryUsage().heapUsed.toString(),
    path: process.execPath,
    pId: process.pid,
    carpeta: process.cwd(),
    CantProcesadores: os.cpus().length,
  };
  res.render("layouts\\info", {
    layout: "info",
    data,
  });
});

module.exports = router;
