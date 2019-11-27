const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const { id } = req.params;
    let tokens = req.header("Authorization").split(" ");
    let jwtToken = tokens[1];
    let data = jwt.verify(jwtToken, "123");
    console.log(data.userId, id);
    if (data.userId == id) {
      next();
    } else {
      res.status(401).json({ status: false, message: "Invalied access." });
    }
  } catch (error) {
    res.status(401).json({ status: false, message: "Invalied token." });
  }
};
