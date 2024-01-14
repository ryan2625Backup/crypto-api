require('dotenv').config();
const cors = require('cors');
const express = require('express');
const cryptoRoutes = require("./routes/crypto");
const userRoutes = require("./routes/user");

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://your-frontend-domain.com', // Replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "true");
});

app.use("/api/portfolio", cryptoRoutes)
app.use("/api/user", userRoutes)

mongoose.connect(process.env.MONGO_URI).then(app.listen(process.env.PORT, () => {
    console.log('Server on portT', process.env.PORT);
})).catch(err => console.log(err))

