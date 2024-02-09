const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const app = express();

// Connect DB

require("./db/connect");

// Import Schema

const Users = require("./models/userSchema");
const Post = require("./models/postSchema");
const authenticate = require("./middlewares/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 3000;

app.post("/api/signup", async (req, resp) => {
  let user = new Users(req.body);
  let result = await user.save();
  resp.send(result);
});

// LOGIN API
app.post("/api/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await Users.findOne(req.body);
    if (user) {
      const payload = {
        id: user._id,
        username: user.username,
      };
       

      const JWT_SECRET_KEY =
        process.env.JWT_SECRET_KEY || "THIS_IS_SECRET_KEY_OF_JWT";
      jwt.sign(
        payload,
        JWT_SECRET_KEY,
        { expiresIn: 86400 },
        async (err, token) => {
          if (err) resp.json({ message: err });
          await Users.updateOne(
            { _id: user._id },

            {
              $set: { token },
            }
          );

          user.save();
          return resp.status(200).json({ user, token });
        }
      );
    } else {
      resp.status(500).send("User Not Found");
    }
  } else {
    resp.send("User Not Found");
  }
});
// NEW POST API

app.post("/api/new-post", authenticate, async (req, resp) => {
  try {
    const { caption, desc, url } = req.body;
    const { user } = req;
    if (!caption || !desc || !url) {
      resp.status(400).send("Please fill the all fields");
    }
    const createPost = new Post({
      caption: caption,
      description: desc,
      image: url,
      user: user,
    });
    await createPost.save();
    resp.status(200).send("Post Create Successfully");
  } catch (error) {
    resp.status(500).send("Error", error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
