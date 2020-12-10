import React from 'react';
import Card from 'react-bootstrap/Card';
import TitleItinerario from '../TitleItinerario';
import './BoxItinerario.css';

function BoxItinerario({ itinerario }) {
  return (
    <div className="globalBox">
      <TitleItinerario />
      <div className="envolveCards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={itinerario.imagem1} />
          <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Card.Title style={{ color: ' #274CA9' }}>
              {itinerario.titulo1}
            </Card.Title>
            <Card.Text>
              {itinerario.texto1}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={itinerario.imagem2} />
          <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Card.Title style={{ color: ' #274CA9' }}>
              {itinerario.titulo2}
            </Card.Title>
            <Card.Text>
              {itinerario.texto2}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={itinerario.imagem3} />
          <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Card.Title style={{ color: ' #274CA9' }}>
              {itinerario.titulo3}
            </Card.Title>
            <Card.Text>
              {itinerario.texto3}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={itinerario.imagem4} />
          <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Card.Title style={{ color: ' #274CA9' }}>
              {itinerario.titulo4}
            </Card.Title>
            <Card.Text>
              {itinerario.texto4}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default BoxItinerario;
