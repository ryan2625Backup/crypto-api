import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./trending.scss"

function Trending({ setId }) {

    const [trending, setTrending] = useState([])
    const [nfts, setNFTs] = useState([])

    useEffect(() => {
        const html = document.querySelector('html')
        html.style.scrollBehavior = "auto"
        window.scrollTo({
            top: 0,
            behavior: "auto"
        })
        html.style.scrollBehavior = ''
        const fetchData = async () => {
            const res = await fetch("https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-Z7basDpAgs5kZ5wE72YuVcUn").then(response => response.json()).then(data => {
                setNFTs(data.nfts)
                setTrending(data.coins)
                console.log(data)
            })
        }
        fetchData()
    }, [])

    return (
        <section className='portfolio-display'>
            <Link to="/">Return to home</Link>
            <h1>Gain insight through the latest trending coins of crypto-verse</h1>
            <h1>Trending NFTs</h1>
            <p>Trending NFTs based on the highest trading volume in the last 24 hours.</p>
            <div className="trending-nfts">
                <div className="nft-header">
                    <h3>Coin</h3>
                    <h3>24H Change</h3>
                    <h3>Avg Price</h3>
                    <h3>7D</h3>
                </div>
                {
                    nfts.map((nft, key) => {
                        return (
                            <div className="nft-row" key={key}>
                                <div className='identifier updated-identifier'>
                                    <img src={nft.thumb} alt="" />
                                    <div>
                                    <h3>{nft.name}</h3>
                                    <p>{nft.symbol}</p>
                                    </div> 
                                </div>
                                <p className={nft.floor_price_24h_percentage_change> 0 ? "green" : "red"}>{nft.floor_price_24h_percentage_change.toString().substring(0, 4)}%</p>
                                <p>{nft.data.h24_average_sale_price}</p>
                                <img src={nft.data.sparkline} alt="" />
                            </div>
                        )
                    })}
            </div>
            <div className="trending-main">
                <h1>Top Trending Coins</h1>
                <p>The 15 most searched coins in the last 24 hours.</p>
                <div className="coin-base">
                    <div className="heading">
                        <h3 className="first-head hash">RANK &#160; </h3>
                        <h3 className="first-head">&#160; COIN</h3>
                        <h3>PRICE</h3>
                        <h3>24H CHANGE</h3>
                        <h3>MARKET RANK</h3>
                    </div>
                    <div className="api-table">
                        {
                            trending.map((coin, key) => {
                                return (
                                    <Link className='row-link row' key={key} onClick={() => setId(coin.item.id)} to={"/coins/" + coin.item.name.toLowerCase()}>
                                        <h3 className='first-head'>{coin.item.score + 1}</h3>
                                        <div className="identifier">
                                            <img src={coin.item.small} alt={coin.item.name} />
                                            <div>
                                                <h2>{coin.item.name}</h2>
                                                <h3>{coin.item.symbol.toUpperCase()}</h3>
                                            </div>
                                        </div>
                                        <h3 className='market-capper'>{coin.item.data.price}</h3>
                                        <h3 className={coin.item.data.price_change_percentage_24h.usd > 0 ? "green" : "red"}>{coin.item.data.price_change_percentage_24h.usd.toString().substring(0, 4)}%</h3>
                                        <h3>{new Intl.NumberFormat().format(coin.item.market_cap_rank)}</h3>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending