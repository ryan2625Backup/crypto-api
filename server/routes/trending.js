const express = require("express")

const { getTrending } = require("../controller/trendingController")

const router = express.Router()

router.get("/", getTrending)



module.exports = router