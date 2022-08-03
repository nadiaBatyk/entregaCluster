const Router = require("express");
const router = Router();
const { fork } = require("child_process");

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("layouts\\login", { layout: "login" });
  }
}
let randomGen = (cantidad) => {
  let obj = {};
  for (let index = 1; index <= cantidad; index++) {
    let num = Math.floor(Math.random() * 1000 + 1);
    obj[num] = obj[num] + 1 || 1;
  }

  return obj;
};
//cuando le pegan al endpoint / render index.hbs
router.get("/", (req, res) => {
  let cant = +req.query.cant || 10000000;

  const objeto = randomGen(cant);

  res.render("layouts\\randoms", {
    layout: "randoms",
    objeto,
  });
});

module.exports = router;
