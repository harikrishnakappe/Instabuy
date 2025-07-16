import React, { useEffect, useState } from "react"
import {Row,Col,Card} from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"


export default function ProductDetails({cartItems,handleAddtoCart}){
    const location =useLocation()
    const navigate=useNavigate()
    const{title,price,images,description,category,id }=location.state;
    const [otherProducts ,setotherProducts]=useState([])
    useEffect(()=>{
        async function  getData(){
            const response=await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id||1}/products?limit=20&offset=0`)
            console.log(response.data)
            setotherProducts(response.data)

        }
        getData();
    },[])
    return(
        <div style={{padding:50}}>
            <Row>
                <Col lg={2}>
                <div>

                    {images.map((image,index)=>{
                        return(
                            <img key={index}src={image} width={150} style ={{marginBottom:20,borderRadius:8}} alt="" />
                        )
                    })}
                </div>
                </Col>
                <Col lg={4}>
                <div>
                <img src={images[0]} width={350} style ={{marginBottom:20,borderRadius:8}} alt=""/>
                <h2>{title}</h2>
                <h4 style={{color:'#216ad9'}}>${price}</h4>
                <h5>{description}</h5></div>
                <button style={{marginTop:20}} onClick={()=>{
                    if(id in cartItems){
                        const currentItem=cartItems[id];
                        handleAddtoCart({[id]:{title,price ,quantity :currentItem.quantity+1}})

                    }else{
                        handleAddtoCart({[id]:{title,price,quantity:1}})
                    }

                }}>Add to Cart </button>
                </Col>
                <Col>
                <h2>other products in this Category</h2>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {otherProducts.map((Product)=>{
                    if(Product.id==id)return
                    return(
                        <Card  key={Product.id} style={{width:'10rem',border:'none',margin:15}}>
                            
                            <Card.Img  src={Product.images[0]}/>
                            <Card.Text>{Product.title.split(" ")[0]}</Card.Text>
                            <Card.Title>${Product.price}</Card.Title>
                            <button onClick={()=>navigate(`/products/${Product.id}`,{state:Product})}style={{width:120}}>View Item</button>
                        </Card>
                    )
                })}</div>
                
                </Col>
            </Row>
        </div>
    )
}