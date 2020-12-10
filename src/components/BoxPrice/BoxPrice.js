import React from 'react';
import './BoxPrice.css';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import TitlePrice from '../TitlePrice';

function BoxPrice() {
  const history = useHistory();
  function comprar() {
    alert('Entre ou cadastre-se para comprar! \n');
    history.push('login');
  }
  return (
    <div className="envolveTextos">
      <TitlePrice />
      <div className="texto">
        <p className="descricaoLocal">
          Pacotes com passagem e hospedagem a partir de R$ 499,98 à vista
          ou em 10x 49,99 sem juros.
        </p>
        <div className="boxPrice">
          <img src="/img/Icones/pagpreço.png" alt="preco" />
          <Button variant="history" type="Reservar" onClick={comprar}>
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
}
export default BoxPrice;
