import React, { Component } from 'react';
import Menu  from '../../Components/Menu';
import Calendar from '../../Components/Calendar';
import './style.css';



class Agenda_Admin extends Component {
    render() {
        return (
          <div className="header">
          <Menu />
          <Calendar />
          </div>
        );
    }
}

export default Agenda_Admin;