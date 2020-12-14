import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import api from '../../../services/api';

import '../../../styles/components/Home/eventos-home.css';

import fest1 from '../../../images/festa_1_bd.jpg';
import fest2 from '../../../images/festa_2_bd.jpg';
import fest3 from '../../../images/festa_3_bd.jpg';

class EventosHome extends Component{

    constructor() {
        super();
        this.state = {      
            images: null,
            index: 0,
        }
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const response = await api.get("/events");
        console.log(response.data);
        this.setState({ images: response.data });
    }


        handleSelect = (selectedIndex, e) => {
          this.setState({ index: selectedIndex });
        }
      

    render() {
        return (
            <div id="component-eventos-home">
                <div className="header-component-eventos-home">
                    <h1>Eventos Realizados</h1>
                </div>
    
                <div className="content-component-eventos-home">
                    <Carousel className="carousel-content-component-eventos-home" cellAlig='center'>
                        <img src={fest1} />
                        <img src={fest2} />
                        <img src={fest3} />
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default EventosHome;