import {useParams, useNavigate} from 'react-router-dom';
import {Button, Form } from "react-bootstrap";
import React,{useState, useEffect} from 'react';
import axios from 'axios';

const UpdateUser= () =>{
    const {id}= useParams();

    const navigate= useNavigate();

    const [formData, setFormData]= useState({
        name:"",
        email:"",
        phone:""
    })

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users/'+id)
        .then(res=>{
            setFormData({...formData, name:res.data.name, email: res.data.email, phone: res.data.phone})
        })
        .catch(err=> console.log(err.message))
    })

    // useEffect(()=>{
    //     const fetchUser= async ()=>{
    //         try{
    //             const response= await fetch(`http://localhost:5000/api/users/${id}`);
    //             const data= await response.json();
    //             setFormData(data);

    //         }catch(err){
    //             console.log("Error in fetching Users :",err.message);
    //         }

    //     }
    //     fetchUser();
    // })

    const handleInputChange=(event)=>{
        setFormData({...formData, [event.target.name]: event.target.value
        });
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/users/${id}`,formData)
        .then(response=> {
            console.log(response)
            navigate("/");
        })
        .catch(errr=> console.log(errr.message));
    }

    return(
        <>
            <div className='center-form'>
            <h1> Update a user </h1>
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
                
                <Button variant="dark" type="button" className="w-100" onClick={handleSubmit}>Update</Button>

                
            </Form>
        </div>
        </>
    )
}
export default UpdateUser;