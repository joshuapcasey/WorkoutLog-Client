import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username, password);
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password:password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response)=> response.json())
        .then((data) =>{
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} required></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='passwordhash'>Password</Label>
                    <Input type='password' onChange={(e) => setPassword(e.target.value)}  name='password' value={password} ></Input>
                </FormGroup>
                <Button type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;