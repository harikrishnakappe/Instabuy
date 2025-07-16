import React, { useState,useEffect } from "react";
import { Table } from "react-bootstrap";
import {Row,Col,Button}from"react-bootstrap"
import { useNavigate } from "react-router-dom";
import cartImg from "../assets/6.png"
export default function Cart({cartItems}){
    const[totalPrice,settotalprice]=useState(0)
    const [totalQuantity,settotalQuantity]=useState(0)
    const navigate=useNavigate();

    useEffect(()=>{
        let tempprice=0;
        let tempquantity=0;
        Object.keys(cartItems).map((cartItemId)=>{
            const details=cartItems[cartItemId];
            if(details.quantity && details.price ){
            tempquantity +=details.quantity;
            tempprice +=details.quantity * details.price;
            }
        })
        
        settotalQuantity(tempquantity)
        settotalprice(tempprice);
    },[])
    return(

        <div style={{margin:60}}><Row>
            <Col style={{margin:40}}>
            <h3>Your Cart </h3>
            <Table style={{marginTop:40}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(cartItems).map((cartItemId)=>{
                        const itemDetails=cartItems[cartItemId];
                        return(
                            <tr>
                                <td>{itemDetails.title}</td>
                                <td>{itemDetails.quantity}</td>
                                <td>{itemDetails.quantity * itemDetails.price}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Total</td>
                        <td>{totalQuantity}</td>
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={()=>{
                navigate('/checkout')
            }}> checkout</Button>
            </Col>
            <Col>
            <img src={cartImg} height={500} alt="" />
            </Col>
            </Row></div>
    )
}