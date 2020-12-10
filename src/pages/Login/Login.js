import React, { useState } from 'react';
import Box from '../../components/Box';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  const input = [

    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
  ];

  return (
    <Box
      email={email}
      password={password}
      setEmail={handleChangeEmail}
      setSenha={handleChangePassword}
      title="Pronto para voar?"
      subtitle="Faça login para conferir ofertas exclusivas e os detalhaes da sua viagem!"
      nextMessage="Não tem uma conta?"
      nextButton="Cadastrar"
      input={input}
    />
  );
}

export default Login;
