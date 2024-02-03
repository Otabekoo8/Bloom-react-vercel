import React from 'react'
import "./Product.css"
import item1 from "../img/portfolio/1.png"
import item2 from "../img/portfolio/2.png"
import item3 from "../img/portfolio/3.png"

const Product = () => {
  return (
    <div className='header'>
        <div className="product">
            <div className="item1">
                <img src={item1} alt="" />
                <h4>-01-</h4>
                <h3>Mirror Maze</h3>
                <p>residential complex with mirror walls</p>
            </div>
            <div className="item2">
                <img src={item2} alt="" />
                <h4>-01-</h4>
                <h3>Mirror Maze</h3>
                <p>residential complex with mirror walls</p>
            </div>
            <div className="item3">
                <img src={item3} alt="" />
                <h4>-01-</h4>
                <h3>Mirror Maze</h3>
                <p>residential complex with mirror walls</p>
            </div>
        </div>
        <div className="carousel">
            <button className='btn2'>--</button>
            <button className='btn3'>++</button>
        </div>
    </div>
  )
}

export default Product