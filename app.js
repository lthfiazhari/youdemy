const express = require("express")
const session = require("express-session")
const app = express();
const router = require("./routes")
const PORT = 3000;

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
})