var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/all", function(req, res, next) {
  res.send("respond with a resource");
});

/*POST user create. */
router.post("/", function(req, res, next) {
  res.send("respond with create");
});

/*PUT user update. */
router.put("/", function(req, res, next) {
  res.send("respond with a update");
});

/*GET user information. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/*DELETE user delete. */
router.delete("/", function(req, res, next) {
  res.send("respond with a delete");
});

module.exports = router;
