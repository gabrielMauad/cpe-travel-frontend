import React from 'react';
import './TitleLocal.css';

function TitleLocal({ title }) {
  return (
    <div className="englobaTitulo">
      <h1>
        Sobre
        {' '}
        {title}
      </h1>
      <hr className="sublinhado" />
    </div>
  );
}
export default TitleLocal;
