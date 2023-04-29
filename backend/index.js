const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const route = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: false,
      secure: false,
    },
  })
);


const port = process.env.PORT || 8080;
const DB_URI = process.env.MONGODB_URI;

//MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", false);

//Router init
route(app);

app.listen(port, () => {
  console.log("Server is running at port : " + port);
});
