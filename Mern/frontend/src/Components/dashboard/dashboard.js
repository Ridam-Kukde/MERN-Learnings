import { useEffect, useState } from 'react';
import {Container,Table,Row,Col, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
const Dashboard= () =>{
    const [users, setUser]=useState([]);
    const navigate= useNavigate();

    const fetchUsers= async ()=>{
        try{
            const response= await fetch("http://localhost:5000/api/users");
            const data= await response.json();
            setUser(data);

        }catch(err){
            console.log("Error in fetching Users :",err.message);
        }

    }

    useEffect(()=>{
        fetchUsers();
    })

    const handleUpdate=(userId)=>{
        navigate(`/user/${userId}`);

    }

    const handleDelete= async(userId)=>{
        try{
            const response= await fetch(`http://localhost:5000/api/users/${userId}`,{
            method: "DELETE"
            });
            if(response.ok) fetchUsers();
        }catch(err){
            console.log("Error in deleting Users :",err.message);
        }
    }

    return(
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Dashboard Component</h1>
                        <Table striped hover bordered responsive>   
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user)=>(
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Button
                                                varient="dark"
                                                onClick={()=> handleUpdate(user._id)}>
                                            Update
                                            </Button>{" "}
                                            <Button
                                                varient="dark"
                                                onClick={()=> handleDelete(user._id)}>
                                            Delete
                                            </Button>{" "}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Dashboard;