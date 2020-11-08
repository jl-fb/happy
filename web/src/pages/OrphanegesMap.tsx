import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';

import localImage from '../images/local.svg';
import '../styles/pages/orphanages.map.css';
import api from '../services/api';
import Orphanage from './Orphanage';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function OrphanegesMap(): JSX.Element {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((res) => {
      setOrphanages(res.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={localImage} alt="Logo Rosto sorrindo" />
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

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup closeButton={false} maxWidth={240} minWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={32} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
