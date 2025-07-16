import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import axios from 'axios'

import { useNavigate } from "react-router-dom"
export default function ProductGallery(){
    const[Products,setProducts]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        async function  getProducts(){
            const response=await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            setProducts(response.data)
            console.log(response.data)
        }
        getProducts()
        
    },[])

    return (
        <div style={{padding:50}}>
            <h3>choose a product</h3>
            <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
                {Products.map((Product)=>{
                    return(
                        <Card  key={Product.id} style={{width:'20rem',border:'none',margin:15}}>
                            
                            <Card.Img  src={Product.images[0]}/>
                            <Card.Text>{Product.title}</Card.Text>
                            <Card.Title>${Product.price}</Card.Title>
                            <button onClick={()=>navigate(`/products/${Product.id}`,{state:Product})}style={{width:120}}>View Item</button>
                        </Card>
                    )
                })}
            </div>

        </div>
    )
}