const cluster = require("cluster");
const os = require("os");
const MODO = process.env.MODO || "fork";
const qtyCpu = os.cpus().length;
function initCluster() {
  if (cluster.isPrimary) {
    console.log(`primary process ${process.pid} is running`);
    for (let index = 0; index < qtyCpu; index++) {
      cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
      console.log("murio el proceso");
      cluster.fork();
    });
  } else {
    const f = require("./server");
  }
}

switch (MODO) {
  case "cluster":
    initCluster();
    break;
  default:
    const f = require("./server");
    break;
}
