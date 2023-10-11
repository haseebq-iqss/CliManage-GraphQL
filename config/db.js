const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => {
      console.log("Mongo-Db Connected. Host ID ->", res.connection.host);
    })
    .catch((err) => console.log(Error("Failed to Connect to DB", err)));
};

module.exports = connectDb;
