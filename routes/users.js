var express = require("express");
var router = express.Router();
const db = require("../models/index"); // new require for db object
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/login", function(req, res, next) {
  res.send("respond with a resource");
});

/*POST user create. */
router.post(
  "/",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { firstname, lastname, password, email } = req.body;
    db.User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: jwt.sign({ email: email }, password)
    })
      .then(newUser => {
        return res.status(200).json({ user: newUser });
      })
      .catch(error => {
        return res.status(400).json({ errors: error });
      });
  }
);

/*PUT user update. */
router.put(
  "/",
  [
    check("id")
      .not()
      .isEmpty(),
    check("password")
      .optional()
      .isLength({ min: 5 })
  ],
  async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { id, firstname, lastname, password } = req.body;
    const user = {};
    if (firstname !== undefined) user.firstname = firstname;
    if (lastname !== undefined) user.lastname = lastname;
    //Set password
    if (password !== undefined) {
      try {
        const response = await db.User.findOne({
          where: { id: id },
          attributes: ["email"]
        });
        user.password = jwt.sign({ email: response.email }, password);
      } catch (error) {
        return res.status(400).json({ errors: error });
      }
    }
    //Update user
    db.User.update(user, { where: { id: id } })
      .then(response => {
        return res.status(200).json({ response });
      })
      .catch(error => {
        return res.status(400).json({ errors: error });
      });
  }
);

/*GET user information. */
router.get("/:id", function(req, res, next) {
  const { id } = req.params;
  db.User.findOne({
    where: { id: id },
    attributes: ["id", "firstname", "lastname", "email"]
  })
    .then(response => {
      return res.status(200).json({ response });
    })
    .catch(error => {
      return res.status(400).json({ errors: error });
    });
});

/*DELETE user delete. */
router.delete("/:id", function(req, res, next) {
  const { id } = req.params;
  db.User.destroy({
    where: { id: id }
  })
    .then(response => {
      return res.status(200).json({ response });
    })
    .catch(error => {
      return res.status(400).json({ errors: error });
    });
});

module.exports = router;
