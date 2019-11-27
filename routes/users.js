var express = require("express");
var router = express.Router();
const db = require("../models/index"); // new require for db object
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authUser = require("../middleware/authUser");

/* GET users listing. */
router.post("/login", function(req, res, next) {
  const { password, email } = req.body;
  db.User.findOne({
    where: { email: email },
    attributes: ["password", "email", "id"]
  })
    .then(response => {
      if (response == null) {
        return res
          .status(401)
          .json({ status: false, message: "Invalied Email or Password" });
      }
      bcrypt
        .compare(password, response.password)
        .then(function(result) {
          if (result) {
            const token = jwt.sign(
              { email: response.email, userId: response.id },
              "123"
            );
            return res.status(200).json({
              status: true,
              token: token
            });
          } else {
            return res.status(401).json({ status: false });
          }
        })
        .catch(error => {
          return res.status(422).json({ status: false, message: error });
        });
    })
    .catch(error => {
      return res.status(400).json({ status: false, message: error });
    });
});

/*POST user create. */
router.post(
  "/",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { firstname, lastname, password, email } = req.body;
    let hash;
    try {
      hash = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(400).json({ errors: error });
    }

    db.User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hash
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
  "/:id",
  authUser,
  [
    check("password")
      .optional()
      .isLength({ min: 5 })
  ],
  async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { firstname, lastname, password } = req.body;
    const user = {};
    if (firstname !== undefined) user.firstname = firstname;
    if (lastname !== undefined) user.lastname = lastname;
    //Set password
    if (password !== undefined) {
      try {
        hash = await bcrypt.hash(password, 10);
        user.password = hash;
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
router.get("/:id", authUser, function(req, res, next) {
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
router.delete("/:id", authUser, function(req, res, next) {
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
