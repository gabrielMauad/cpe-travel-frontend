import React from 'react';
import Box from '../../components/Box';

function RegisterLocal() {
  const input = [
    { controlId: 'nome', type: 'email', placeholder: 'Digite o nome do local' },
    { controlId: 'pais', type: 'email', placeholder: 'Digite o país de origem' },
    { controlId: 'preco', type: 'email', placeholder: 'Digite o preço' },
    { controlId: 'itinerario', type: 'email', placeholder: 'Digite o itinerario do local' },
  ];

  return (
    <Box
      title="Cadastro de Local"
      subtitle="Preencha os campos abaixo para o cadastro do local desejado"
      nextMessage=""
      nextButton=""
      input={input}
    />
  );
}

export default RegisterLocal;
