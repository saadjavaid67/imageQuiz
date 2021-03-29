import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

function LoginForm({Login,error})
{
    const [details, setDetails]= useState({email:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }

    return (
        <Form onSubmit={submitHandler} className="login-form">
            <h2 className="login-heading">Login Form</h2>
            {(error!=="")?( <div className="error">{error}</div> ):("")}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password} />
            </Form.Group>
            <Button variant="primary" className="btn-block" type="submit">
                Submit
        </Button>
        </Form>
    )
}

export default LoginForm;
