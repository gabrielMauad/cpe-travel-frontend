import React, { useState, useEffect, useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Slider from '../../components/Carousel';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import './Home.css';

function Home() {
  const [search, setSearch] = useState();
  const [images, setImages] = useState([]);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const { signIn, user } = useAuth();

  const input = [
    { controlId: 'email', type: 'email', placeholder: 'Digite o seu email' },
    { controlId: 'senha', type: 'password', placeholder: 'Digite a sua senha' },
  ];

  useEffect(() => {
    const URL1 = 'http://localhost:8080/locals';
    const URL2 = 'http://localhost:8080/users';
    fetch(URL1)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setImages([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    fetch(URL2)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setUsers([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  const handleChange = (e) => setSearch(e.target.value.toLowerCase());
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleLogin = useCallback(async () => {
    try {
      const data = { email, password };
      signIn({ email, password });
      // const response = await api.post('/user/authenticate', data);
      // console.log(response.data);

      // if (!response.data.email) {
      //   return alert('Se fodeu, tente novamente um dia');
      // }
      alert('Parabens, se [e foda memo mermao');
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [email, password]);

  console.log(user);

  const handleConfirm = () => {
    const existEmail = users.filter((item) => item.email === email);
    const existPassword = users.filter((item) => item.password === password);
    if ((existEmail.length !== 0) && (existPassword.length !== 0)) {
      if (existEmail[0].admin) history.push('cadastro-local');
      else alert('Informações incorretas!');
    } else alert('Informações incorretas!');
  };

  return (
    <div>
      {!admin && (
      <div>
        <Header setAdmin={setAdmin} />
        <Slider images={images} />
        <div className="searchDiv">
          <SearchBar handleChange={handleChange} />
        </div>
        <div className="boxSubtitle">
          <h1>
            Guia de Destinos
          </h1>
          <hr className="linha" />
        </div>
        <div className="boxMessage">
          <div>
            Procure as melhores localidades e os preços mais baixos da viagem dos seus sonhos!
          </div>
        </div>
        <Cards search={search} images={images} />
        <Footer />
      </div>
      )}
      {admin && (
        <div className="adminPage">
          <div className="boxAdmin">
            <div className="boxContainer">
              <BiArrowBack className="back_button" type="button" onClick={() => setAdmin(false)} />
              <div className="logoAzul" />
            </div>
            <div className="titleAdmin">Essa página só pode ser acessada por administradores</div>
            {input.map((item) => {
              const change = item.controlId === 'email' ? handleChangeEmail : handleChangePassword;
              return (
                <div key={item.controlId}>
                  <input type={item.type} placeholder={item.placeholder} onChange={change} className="inputAdmin" />
                </div>
              );
            })}
            <Button className="adminButton" variant="primary" onClick={handleLogin}>
              Próximo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
