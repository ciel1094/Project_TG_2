const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const globalRouter = require("./routers/globalRouter");
const reviewRouter = require("./routers/reviewsRouter");
const loginRouter = require("./routers/loginRouter");

const PORT = 4000;
const app = express();

app.use(
    session({
      secret: "TypingGame_TG",
      resave: false,
      saveUninitialized: true,
    })
);

app.use(morgan("dev"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/review", reviewRouter);
app.use("/signup", loginRouter);

app.listen(PORT, () => {
    console.log(`Express ${PORT} PORT Server Start!`);
});