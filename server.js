require("dotenv").config();
const express = require("express");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const connectDb = require("./config/db");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

connectDb();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "production" ? false : true,
  })
);

const server = app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
