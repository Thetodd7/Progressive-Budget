const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const viewCont = require("./controllers/view");
// const apiCont = require("./controllers/api");
const controllers = require("./controllers")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/money', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// app.use(apiCont);
app.use(controllers);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});