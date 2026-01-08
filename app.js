const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const DatabseConnected = require("./config/DB");

dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

// routes
const recipeUiRouter = require("./routes/recipeRoutes");
app.use("/", recipeUiRouter);

DatabseConnected();
// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
