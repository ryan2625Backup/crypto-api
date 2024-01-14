require('dotenv').config();
const cors = require('cors');
const express = require('express');
const cryptoRoutes = require("./routes/crypto");
const userRoutes = require("./routes/user");

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(cors());

 app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
 });

app.use("/api/portfolio", cryptoRoutes)
app.use("/api/user", userRoutes)

mongoose.connect(process.env.MONGO_URI).then(app.listen(process.env.PORT, () => {
    console.log('Server on portT', process.env.PORT);
})).catch(err => console.log(err))

