import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

//Formulário de Login do Administrador

export default function FormLoginAdmin() {
    
    //Variáveis 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funções 

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await Axios.post("http://localhost:3333/sessions", {
            email,password
        })
        console.log(response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        <Link to="/Agenda_Admin" /> 
    }

    return (
        <div className="Login_Admin">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" >
                    <FormLabel>Email</FormLabel>
                    <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup controlId="password" >
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button block type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}