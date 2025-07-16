import { Row,Col,Button,Form } from "react-bootstrap";
import Loginimg from '../assets/2.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Register({setuser}){
  const [email,setemail]=useState('')
  const navigate =useNavigate();
    return(
        <div style={{backgroundColor:'#216ad9'}}>
            <Row>
                <Col style={{padding:100}}>
                <div ><h1 style={{color:'white'}}>InstaBuy!!</h1>
                <h2 style={{color:'white'}}>One place Where brands come</h2>
                <h2 style={{color:'white'}}>together for  all across  the </h2>
                <h2 style={{color:'white'}}>World.</h2>
                <Form>
                <div style={{width:'70%',display:'flex',justifyContent:'space-between',gap:'0.5rem'}}>
      <Form.Group  style={{width:'35%'}}className="mb-2" controlId="formBasicEmail">
        <Form.Control type="Username" placeholder="Enter Username" />
      </Form.Group>
                
      <Form.Group  style={{width:'35%'}}className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" onChange={(e)=>setemail(e.currentTarget.value)}placeholder="Enter email" />
      </Form.Group>

      <Form.Group  style={{width:'35%'}} className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group></div>
      
      <Button onClick={()=>{
        localStorage.setItem('useremail',email)
        setuser(email)
        navigate('/')
      }}   style={{width:'70%',backgroundColor:'#216ad9',borderWidth:1,borderColor:'white'}} type="submit">
       Join the club.. <u><a href="/login" style={{color:'white',cursor:'pointer'}}>Register Now</a></u>
      </Button>
      <div style={{marginTop:'10px',color:'white'}}>Already a member?<a href="/Login" style={{color:'white',cursor:'pointer'}}>click Here</a></div>
    </Form>
    </div>
                </Col>  
                <Col>   
                    <img src={Loginimg} alt="" style={{height:'600px'}}/>
                </Col>
            </Row>
        </div>
    )
}