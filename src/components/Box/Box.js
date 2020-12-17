import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './Box.css';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import Input from '../Input';
import { useAuth } from '../../hooks/auth';

function Box({
  title, subtitle, nextMessage, nextButton, input, email, password,
  confirmEmail, confirmPassword, setEmail, setSenha, setConfirmEmail, setConfirmPassword,
}) {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const url = nextButton === 'Cadastrar' ? '/img/Icones/novofundo_login.png' : '/img/Icones/novofundo-cadastro.png';
  const marginNextButton = nextButton === 'Cadastrar' ? '50px' : '0px';
  const { user, signIn } = useAuth();

  const create = useCallback(async (objetoCadastro) => {
    try {
      const response = await api.post('http://localhost:3333/user', objetoCadastro);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // function create(objetoCadastro) {
  //       .then(alert('Cadastrado com sucesso!'))
  //       .catch(() => {
  //         throw new Error('Não foi possível cadastrar os dados :(');
  //     });
  // }

  const registerUser = () => {
    create({
      email,
      password,
      admin: false,
    });
  };

  const handleLogin = useCallback(async () => {
    try {
      signIn({ email, password });
      history.push('/');
      alert('Parabens, se [e foda memo mermao');
    } catch (err) {
      console.log(err);
    }
  }, [email, password]);

  const handleClick = () => {
    if (nextButton === 'Cadastrar') {
      const userEmail = email;
      const userPassword = password;
      handleLogin();
    //   const existUser = users.filter((item) => item.email === userEmail);
    //   if (existUser.length !== 0) {
    //     if (existUser[0].password === userPassword) history.push('/');
    //     else alert('Informações incorretas!');
    //   } else {
    //     alert('Usuário não cadastrado!');
    //   }
    } else {
      const isEqualsEmails = email === confirmEmail;
      const isEqualsPasswords = password === confirmPassword;
      const alreadyRegister = users.filter((item) => item.email === email);
      if (alreadyRegister.length !== 0) {
        alert('Usuário ja cadastrado');
      } else if (isEqualsEmails && isEqualsPasswords) {
        registerUser();
        history.push('/login');
      } else alert('Email ou senha não coincidem com confirmação');
    }
  };

  return (
    <div className="containerRegister" style={{ backgroundImage: `url(${url})` }}>
      <div className="baseRegister">
        <div className="boxContainer">
          <BiArrowBack className="back_button" type="button" onClick={() => history.push('/home')} />
          <div className="logoAzul" />
        </div>
        <div>
          <h2 className="H2title">{title}</h2>
          <p className="text">
            {subtitle}
          </p>
          <Input
            input={input}
            setSenha={setSenha}
            setEmail={setEmail}
            setConfirmEmail={setConfirmEmail}
            setConfirmPassword={setConfirmPassword}
          />

          {nextButton === 'Cadastrar'
          && (
          <div className="fundocontainer1" alt="Help">
            <Button variant="link">Esqueceu a senha?</Button>
          </div>
          )}

          {nextButton === 'Logar' && (
          <p className="subtitle">
            Ao se cadastrar, você aceita os Termos de Serviço e a Política de
            Privacidade
          </p>
          )}

          <div className="next_button" style={{ marginTop: marginNextButton }}>
            <Button variant="primary" type="Proximo" onClick={() => handleClick()}>
              Próximo
            </Button>
          </div>
          <div className="fundocontainer">
            <p className="linkLogin">{nextMessage}</p>
            <Button
              variant="link"
              onClick={() => {
                if (nextButton === 'Cadastrar') history.push('/cadastro');
                else history.push('/login');
              }}
            >
              {nextButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
