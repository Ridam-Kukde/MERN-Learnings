import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useNavigate,} from 'react-router-dom';
import "./postUser.css";
import axios from 'axios';

const PostUser= () =>{
    const [formData, setFormData]= useState({
        name:"",
        email:"",
        phone:""
    })
    const navigate= useNavigate();

    const handleInputChange=(event)=>{
        setFormData({...formData, [event.target.name]: event.target.value
        });
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/users',formData)
        .then(response=> {
            console.log(response)
            navigate("/");
        })
        .catch(errr=> console.log(errr.message));
    }
    return(
        
        <div className='center-form'>
            <h1> Post new user </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <br></br>
                <Button variant="dark" type="button" className="w-100" onClick={handleSubmit}>Add/post</Button>

                
            </Form>
        </div>
        
    )
}
export default PostUser;