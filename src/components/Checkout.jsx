import React from "react";
import Successimg from '../assets/16.png'
export default function Checkout(){
    return (
        <div style={{display:'grid',justifyContent:'center',margin:70}}>
            <img src={Successimg} height ={300} alt="" />
            <h3 style={{textAlign:'center ',margin:20}}>Success</h3>
        </div>
    )
}