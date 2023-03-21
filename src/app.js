import express from "express";
import "dotenv/config";
import { create } from "express-handlebars";
import { VIEWS_PATH } from "./consts.js";
import { home } from "./controllers/home.js";
import HandlebarsHelpers from "./lib/HandlebarsHelpers.js";
import multer from "multer";
import { saveAvatar } from "./middleware/saveAvatar.js";

const app = express();
app.use(express.static("public"));

/**
 * Handlebars Init
 */
const hbs = create({
  helpers: HandlebarsHelpers,
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH);

/**
 * App Routing
 */
app.get("/", home);
app.post("/uploadAvatar", multer().single("avatar"), saveAvatar, (req, res) => {
  res.send("OK");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Application is running on http://localhost:${process.env.PORT}/.`
  );
});
