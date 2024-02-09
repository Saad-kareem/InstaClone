const mongoose = require("mongoose");

const db =
  "mongodb+srv://saadkareem2481:saad123@cluster0.tcsjij7.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected Succesfully");
  })
  .catch((e) => {
    console.log(e, "error");
  });
