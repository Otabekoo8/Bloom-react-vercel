import React from 'react'
import logo from "../img/Vector.png"
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>
        {/* <div className="container"> */}
            <div className="header-inner">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="link">
                        <ul>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Сервисы</a></li>
                            <li><a href="#">Портфолио</a></li>
                            <li><a href="#">Клиенты</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                        <div className="langue">
                    <ul>
                        <li><a href="#">EN</a></li>
                        <li><a href="#">RU</a></li>
                        <li><a href="#">UZ</a></li>
                    </ul>    
                    </div>
                    </div>
                </div>
                <div className="head">
                    <h1>Bloom <br /> Architechture</h1>
                    <button className='btn'>Order <br /> project</button>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Header