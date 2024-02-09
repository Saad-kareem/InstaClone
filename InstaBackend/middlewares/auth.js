const Users = require("../models/userSchema");

const authenticate = async (req, resp, next) => {
  try {
    console.log(req.headers, "Headers");
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization?.split("");
    if (!authorization && !token) {
      resp.status(400).send("Invalid Token");
    }

    const verifyToken = jwt.verify(token, "THIS_IS_SECRET_KEY_OF_JWT");
    const user = await Users.findOne({ _id: verifyToken._id, token });
    console.log(verifyToken, user);

    if (!user) {
      resp.status(401).send("User Not Found");
    }
    req.user = user;
    next();
  } catch (err) {
    resp.status(500).send(err);
  }
};
module.exports = authenticate;
