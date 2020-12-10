import React, { useState } from 'react';
import Box from '../../components/Box';

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [confirmPassword, setConfirmPassWord] = useState();
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeConfirmEmail = (e) => setConfirmEmail(e.target.value);
  const handleChangeConfirmPassword = (e) => setConfirmPassWord(e.target.value);

  const input = [

    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'email2', type: 'email', placeholder: 'Confirme o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
    { controlId: 'senha2', type: 'password', placeholder: 'Confirme a sua senha' },
  ];

  return (
    <Box
      setEmail={handleChangeEmail}
      setSenha={handleChangePassword}
      setConfirmEmail={handleChangeConfirmEmail}
      setConfirmPassword={handleChangeConfirmPassword}
      email={email}
      password={password}
      confirmEmail={confirmEmail}
      confirmPassword={confirmPassword}
      title="Vamos começar?"
      subtitle="Crie uma conta para utilizar os nossos serviços com facilidade."
      nextMessage="Já tem uma conta?"
      nextButton="Logar"
      input={input}
    />
  );
}
export default Register;
