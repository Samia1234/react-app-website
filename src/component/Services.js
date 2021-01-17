import React, { Component } from 'react'
import bed from'../images/bedroom.jpg'
import office from'../images/office.jpg'
import cuisine from'../images/restaurant.jpg'
import beby from'../images/jardin.jpg'
export class Services extends Component {
    state={
        services:[
            {
                img:bed,
                desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                img:office,
                desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                img:cuisine,
                desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                img:beby,
                desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            }

        ]
    }
    render() {
        return (
            <div className=" p-5 services">
                <h1 className="title m-5">our services</h1>
                <div className="row p-5 m-5 d-flex">
                    {this.state.services.map((service,index)=>(
                        <div className="col-lg-4">
                            <img src={service.img} className="service-img" alt=""/>
<p className="service-p">{service.desc}</p>
                            </div>
                    ))}
                </div>

                
            </div>
        )
    }
}

export default Services
