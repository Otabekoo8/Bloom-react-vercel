import React from 'react'
import logo from "../img/Vector.png"
import "./Footer.css"
import ins from "../img/ins.png"

// import ins from "../img/inst.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="one">
            <div className="nav">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="lin">
                <ul>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Сервисы</a></li>
                            <li><a href="#">Портфолио</a></li>
                            <li><a href="#">Клиенты</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
            </div>
            </div>
            <div className="icon">
              <div className="ins">
                <img src={ins} alt="" />
              </div>
            </div>
            <div className="log">
            <button className='register '>Order <br /> project</button>
            </div>
        </div>


        <div className="two"></div>
    </div>
  )
}

export default Footer