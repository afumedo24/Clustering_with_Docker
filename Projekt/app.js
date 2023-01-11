const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require('connect-mongo');

const postRouter = require("./routes/postroutes.js");
const userRouter = require("./routes/userroutes.js");

const mongoURL = "mongodb://admin:mypass@mongo:27017/?authSource=admin";
mongoose.set("strictQuery", true);

app.use(session({
    secret: 'foo',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000*30,
    },
    store: MongoStore.create({
        mongoUrl: mongoURL,
        dbName: "Sessions",
    }),
  }));


const connectWithRetry =() => {

    mongoose.connect(mongoURL)
    .then( ()=> console.log("Succesfully connected to DB"))
    .catch( (e) => {
        console.log(e)
        console.log("Cannot connect to DB")
        setTimeout(connectWithRetry, 5000)
    });
};

connectWithRetry();



app.use(express.json());
app.get("/api/v1", (req, res) => {
    res.send("<h1> Hello! <h1>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("listening on port", port));