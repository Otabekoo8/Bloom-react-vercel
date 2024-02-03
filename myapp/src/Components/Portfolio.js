import React from 'react'
import "./Portfolio.css"
import portfolio from "../img/background/service.png"
const Portfolio = () => {
  return (
    <div className="header">
        <div className="portfolio">
            <div className="portfolio1">
                <img src={portfolio} alt="" />
            </div>
            <div className="portfolio2">
                <h1>
                Architectural Engineering  <span>01</span>
                </h1>
            </div>
            <div className="portfolio3">
                <h1>
                    Interior Design <span>02</span>
                </h1>
            </div>
            <div className="portfolio4">
                <h1>
                Urban environment design <span>03</span>
                </h1>
            </div>
            <div className="portfolio5">
                <h1>Landscape design <span>04</span></h1>
            </div>
            <div className="portfolio6">
                <h1>Project documentation <span>05</span></h1>
            </div>
            <div className="portfolio7">
                <h1>Author's supervision <span>06</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Portfolio