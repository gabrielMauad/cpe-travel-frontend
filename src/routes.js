import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterLocal from './pages/RegisterLocal';
import Local from './pages/Local';

function Routes() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8080/locals';
    fetch(URL)
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
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/cadastro-local" component={RegisterLocal} />
        <Route exact path="/RioDeJaneiro" render={(props) => <Local {...props} local="RioDeJaneiro" images={images} />} />
        <Route exact path="/Salvador" render={(props) => <Local {...props} local="Salvador" images={images} />} />
        <Route exact path="/Olinda" render={(props) => <Local {...props} local="Olinda" images={images} />} />
        <Route exact path="/Amsterdam" render={(props) => <Local {...props} local="Amsterdam" images={images} />} />
        <Route exact path="/Paris" render={(props) => <Local {...props} local="Paris" images={images} />} />
        <Route exact path="/Porto" render={(props) => <Local {...props} local="Porto" images={images} />} />
        <Route exact path="/NovaYork" render={(props) => <Local {...props} local="NovaYork" images={images} />} />
        <Route exact path="/IPhiPhi" render={(props) => <Local {...props} local="IPhiPhi" images={images} />} />
        <Route exact path="/MLake" render={(props) => <Local {...props} local="MLake" images={images} />} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
