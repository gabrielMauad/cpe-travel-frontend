import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TiPlaneOutline } from 'react-icons/ti';
import { IconContext } from 'react-icons/lib';
import { BiBed, BiMenu } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { FiFileText, FiLogIn, FiFilePlus } from 'react-icons/fi';
import {
  Drawer, List, ListItem, ListItemText, Button,
} from '@material-ui/core';
import MyButton from '../Button';
import Logo from '../Logo';
import './Header.css';

function BurgerMenu(setAdmin) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const headerItens = [
    {
      icon: <TiPlaneOutline className="icons" />,
      path: '/',
      text: 'Passagens',
    },
    {
      icon: <BiBed className="icons" />,
      path: '/',
      text: 'Hotéis',
    },
    {
      icon: <RiSuitcaseLine className="icons" />,
      path: '/',
      text: 'Pacotes',
    },
    {
      icon: <FiFileText className="icons" />,
      path: '/cadastro',
      text: 'Cadastro',
    },
    {
      icon: <FiLogIn className="icons" />,
      path: '/login',
      text: 'Login',
    },

  ];
  return (
    <div className="containerBurger">
      <IconContext.Provider value={{ color: 'white', size: '30px' }}>
        <BiMenu onClick={() => setOpen(true)} />
      </IconContext.Provider>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List className="burgerList">
          {headerItens.map((item) => (
            <ListItem className="burgerListItem" onClick={() => history.push(item.path)} key={`burger-${item.text}`}>
              <IconContext.Provider value={{ color: 'white' }}>
                {item.icon}
              </IconContext.Provider>
              <ListItemText className="burgerText">
                {item.text}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem className="burgerListItem" onClick={() => setAdmin(true)}>
            <IconContext.Provider value={{ color: 'white' }}>
              <FiFilePlus />
            </IconContext.Provider>
            <ListItemText className="burgerText">
              Cadastro de Local
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

function Header({ setAdmin }) {
  const headerItens = [
    {
      icon: <TiPlaneOutline className="icons" />,
      path: '/',
      text: 'Passagens',
    },
    {
      icon: <BiBed className="icons" />,
      path: '/',
      text: 'Hotéis',
    },
    {
      icon: <RiSuitcaseLine className="icons" />,
      path: '/',
      text: 'Pacotes',
    },
  ];
  const margin = '0px 20px 0px 0px';
  const history = useHistory();

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <button className="logoButton" type="button" onClick={() => history.push('/')}>
          <Logo />
        </button>
        {headerItens.map((item) => (
          <div className="divButton" key={item.text}>
            {item.icon}
            <MyButton configMargin={margin} page={item.path}>{item.text}</MyButton>
          </div>
        ))}
        <div className="divButton">
          <FiFilePlus className="icons" />
          <Button
            onClick={() => setAdmin(true)}
            style={{
              fontSize: '15px', color: 'white', fontFamily: 'inherit', outline: 'none',
            }}
          >
            Cadastro de Local
          </Button>
        </div>
      </div>
      {BurgerMenu(setAdmin)}
      <div className="rightContainer">
        <MyButton configMargin="0px 5px 0px 0px" page="/cadastro">Cadastre-se</MyButton>
        <p className="bar">|</p>
        <MyButton configMargin="0px 0px 0px 5px" page="/login">Entrar</MyButton>
      </div>
    </div>
  );
}

export default Header;
