import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';

import local from '../images/local.svg';
import '../styles/pages/orphanages.map.css';
import 'leaflet/dist/leaflet.css';

export default function OrphanegesMap(): JSX.Element {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={local} alt="Logo Rosto sorrindo" />
          <h2>Escolha um orfanato no mapa </h2>
          <p>Muitas crianças estão esperando a sua visita (: </p>
        </header>
        <footer>
          <strong>Florianópolis</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <MapContainer
        center={[-27.6094303, -48.4687409]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
