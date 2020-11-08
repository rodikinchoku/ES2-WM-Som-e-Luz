import React, { Component } from 'react';
import Menu  from '../../Components/Menu';
import Calendar from '../../Components/Calendar';
import CardAdmin from '../../Components/CardAdmin';
import './style.css';



class Agenda_Admin extends Component {
    render() {
        return (
          <div className="header">
          <Menu />
          <h1 className="agendaAdminTitle">Agenda</h1>
          <Calendar />
          <CardAdmin />
          </div>
        );
    }
}

export default Agenda_Admin;