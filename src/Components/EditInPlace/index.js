import React, {useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';

const EditInPlace = ({ value, onChangeValue}) => {

    //Variáveis 

    const inputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const edit = () => setIsEditing(true);
    const done = () => {
        onChangeValue(inputRef.current.value)
        setIsEditing(false);
    }

    //Funções 

    useEffect(() => {
        if(isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing])

    if(isEditing) {
        return <Form.Control  type="text" defaultValue={value} ref={inputRef} onBlur={done}/>
    }

    return <span onClick={edit} className='edit-in-place'>{value}</span>
        
}

export default EditInPlace;