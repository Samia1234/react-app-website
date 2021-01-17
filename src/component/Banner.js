import React from 'react'
import './style.css'
import Navbar from './Navbar'
export default function Banner() {
    return (
        <div className="banner">
           <Navbar/>
         <div className="text-banner ">
             <h3>descover</h3>
             <h1>the difference</h1>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       
         </div>
        </div>
    )
}
