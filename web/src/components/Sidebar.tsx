import React from 'react';
import { FiAlignLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/local.svg';
import '../styles/components/sidebar.css';

export default function Sidebar(): JSX.Element {
  const { goBack } = useHistory();
  return (
    <aside>
      <img src={mapMarkerImg} alt="Logo casa de acolhimento" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiAlignLeft size={24} color="fff" />
        </button>
      </footer>
    </aside>
  );
}
