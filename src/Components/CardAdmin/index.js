import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditInPlace from '../EditInPlace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import './style.css';

//Card com informações dos eventos puxados do caledário para a página do administrador

const CardAdmin = () => {

     //Variáveis

    const [name, setName] = useState('Nome');
    const [time, setTime] = useState('Horário');
    const [local, setLocal] = useState('Local');
    const [name1, setName1] = useState('Nome');
    const [time1, setTime1] = useState('Horário');
    const [local1, setLocal1] = useState('Local');
    const [isEditing, setIsEditing] = useState(false);
    const edit = () => setIsEditing(true);
    const done = () => setIsEditing(false);
    
    //Funções 
    if(isEditing) {
        return (
            <Card border="secondary" className="cardAdmin" >
            <Card.Header as="h5" className="cardHead">
                Eventos
                <Button variant="outline-primary" className="editIconUp" onClick={done}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            </Card.Header>
            <Card.Body>    
                <Card.Title><EditInPlace value={name} onChangeValue={setName} /></Card.Title>
                <Card.Text className="cardTextsFirst"><EditInPlace value={time} onChangeValue={setTime} /></Card.Text>
                <Card.Text className="cardTexts"><EditInPlace value={local} onChangeValue={setLocal} /></Card.Text>
            </Card.Body>
            <hr />
            <Card.Body className="cardHorasBaixo">
                <Card.Title><EditInPlace value={name1} onChangeValue={setName1} /></Card.Title>
                <Card.Text className="cardTextsFirst"><EditInPlace value={time1} onChangeValue={setTime1} /></Card.Text>
                <Card.Text className="cardTexts"><EditInPlace value={local1} onChangeValue={setLocal1} /></Card.Text>
            </Card.Body>
        </Card>
        );
    }
    else{
        return (
            <Card border="secondary" className="cardAdmin" >
                <Card.Header as="h5" className="cardHead">
                    Eventos
                    <Button variant="outline-primary" className="editIconUp" onClick={edit}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="cardTextsFirst">{time}</Card.Text>
                    <Card.Text className="cardTexts">{local}</Card.Text>
                </Card.Body>
                <hr />
                <Card.Body className="cardHorasBaixo">
                    <Card.Title>{name1}</Card.Title>
                    <Card.Text className="cardTextsFirst">{time1}</Card.Text>
                    <Card.Text className="cardTexts">{local1}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
    
}

export default CardAdmin;