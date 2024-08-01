import path from "path";
import express from "express";
import morgan from "morgan";

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "./views"));

app.use(morgan("dev"));

app.use(express.static(path.join(import.meta.dirname, "../public")));

app.get("/", (req, res) => {
  return res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  return res.render("about", { title: "About" });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
