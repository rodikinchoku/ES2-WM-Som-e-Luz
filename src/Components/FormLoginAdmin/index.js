import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Formulário de Login do Administrador

export default function FormLoginAdmin() {
    
    //Variáveis 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funções 

    function validateForm() {
        return (email.length > 0 && password.length > 0);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login_Admin">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button block bsSize="large" disable={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}