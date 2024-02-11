const getTrending = async (req, res) => {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-Z7basDpAgs5kZ5wE72YuVcUn")
        const trendingData = await response.json()
        res.status(200).json({ trendingData })
    } catch (error) {
        res.status(400).json({ mssg: "Error fetching trending" })
    }
}


module.exports = {
    getTrending
}