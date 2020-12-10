import React from 'react';
import './BoxImages.css';

function BoxImages({ foto }) {
  return (
    <div className="boxDestino">
      <img src={foto.capa} height="100%" width="100%" alt="imagensCapa" />

    </div>
  );
}
export default BoxImages;
