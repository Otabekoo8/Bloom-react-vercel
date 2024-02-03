import React from 'react'
import "./Ipsum.css"
import lor1 from "../img/logos/1.svg"
import lor2 from "../img/logos/2.svg"
import lor3 from "../img/logos/3.svg"
import lor4 from "../img/logos/1.svg"

const Ipsum = () => {
  return (
    <div className="headerr">
        <div className="Inn">
            <div className="onebtn">--</div>
            <div className="twobtn">++</div>
        </div>
        <div className="lorem">
            <div className="lorem1">
                <img src={lor1} alt="" />
                <p>Very long client company name</p>
            </div>
            <div className="lorem2">
                <img src={lor2} alt="" />
                <p>Very long client company name</p>
            </div>
            <div className="lorem3">
                <img src={lor3} alt="" />
                <p>Very long client company name</p>
            </div>
            <div className="lorem4">
                <img src={lor4} alt="" />
                <p>Very long client company name</p>
            </div>
        </div>
    </div>
  )
}

export default Ipsum