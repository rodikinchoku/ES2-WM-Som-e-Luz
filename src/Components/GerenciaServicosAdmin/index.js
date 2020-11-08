import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import './style.css';

const GerenciaServicosAdmin = () => {
    return (
        <div >
            <Button variant="outline-secondary" className="editar_Servicos"><FontAwesomeIcon icon={faEdit} /></Button>
            <Table striped bordered hover size="sm" className="tabelaGerenciaServicosAdmin">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Serviço</th>
                    <th>Valor (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Som</td>
                    <td>500</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Luz</td>
                    <td>1500</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default GerenciaServicosAdmin;