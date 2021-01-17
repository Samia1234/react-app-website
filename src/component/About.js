import React, { Component } from 'react'
import deco1 from'../images/deco1.jpg'
import './style.css'
export class About extends Component {
    render() {
        return (
            <div className="row m-5 p-5">
                <div className="col-lg-6 col-md-10 about-text">
                     <h3> About us</h3>
                     <h1>welcom to our team</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  <button type="button" className="btn-read" >read more</button>
                </div>
                <div className="col-lg-6 col-md-10 about-img">
                    <img src={deco1} className=""/>
                </div>
                
            </div>
        )
    }
}

export default About
