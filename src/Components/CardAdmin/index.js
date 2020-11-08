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
    
    return (
        <Card border="secondary" className="cardAdmin" >
            <Card.Header as="h5" className="cardHead">
                Eventos
                <Button variant="outline-primary" className="editIconUp"  onClick={isEditing ? done : edit}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            </Card.Header>
            <Card.Body>
                <Card.Title>{isEditing ?  <EditInPlace value={name} onChangeValue={setName} /> : name}</Card.Title>
                <Card.Text className="cardTextsFirst">{isEditing ?  <EditInPlace value={time} onChangeValue={setTime} /> : time}</Card.Text>
                <Card.Text className="cardTexts">{isEditing ?  <EditInPlace value={local} onChangeValue={setLocal} /> : local}</Card.Text>
            </Card.Body>
            <hr />
            <Card.Body className="cardHorasBaixo">
                <Card.Title>{isEditing ?  <EditInPlace value={name1} onChangeValue={setName1} /> : name1}</Card.Title>
                <Card.Text className="cardTextsFirst">{isEditing ?  <EditInPlace value={time1} onChangeValue={setTime1} /> : time1}</Card.Text>
                <Card.Text className="cardTexts">{isEditing ?  <EditInPlace value={local1} onChangeValue={setLocal1} /> : local1}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardAdmin;