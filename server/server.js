require('dotenv').config();
let cors = require('cors');
const express = require('express');
const cryptoRoutes = require("./routes/crypto");
const userRoutes = require("./routes/user");
const trendingRoutes = require("./routes/trending")
const mongoose = require('mongoose');

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/portfolio", cryptoRoutes);
app.use("/api/user", userRoutes);
app.use("/api/trending", trendingRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => {
        console.log('Server on port', process.env.PORT);
    }))
    .catch(err => console.log(err));
