import React from 'react';
import './BoxText.css';
import TitleLocal from '../TitleLocal';

function BoxText({ texto }) {
  return (
    <div className="envolveTextos">
      <TitleLocal title={texto.title} />
      <div className="texto">
        <p className="descricaoLocal">
          {texto.descricao}
          {' '}
        </p>
      </div>
    </div>
  );
}
export default BoxText;
