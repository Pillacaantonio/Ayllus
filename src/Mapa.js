

import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Mapa extends Component {
  componentDidMount() {

    const locationCoordinates = [-12.066099219349837,-77.04492270353765];


    this.map = L.map('map').setView(locationCoordinates, 13);

 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

 
    L.marker(locationCoordinates)
      .addTo(this.map)
      .bindPopup('Tu Dirección Aquí') 
      .openPopup();
  }

  render() {
    return <div id="map" style={{ height: '400px' }}></div>;
  }
}
export default Mapa;

