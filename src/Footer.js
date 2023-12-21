import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Footer extends Component {
 
  render() {
    return (
      <div className='footer1'>
        <p>© Copyright 2023 restaurante ayllus<span class="separador"> | </span><span class="desarrollado-por">Desarrollado por  pillaca pariona jose antonio </span></p>
    
      </div>
    );
  }
}

export default Footer;