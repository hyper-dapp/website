import React, { Component } from 'react';
import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import {
  ChainAgnostic,
  Composable,
  Decentralized,
  DefineVerify,
  Home,
  NavBar
} from './components';
import './App.css';

const App = props => {
  const links = [
    {href: '#define-verify', name: 'Solutions'},
    {href: '#decentralized', name: 'Sign Up for Project Updates'}
  ];
  return (
    <div className="App">
      <NavBar links={links}/>
      <Container>
        <Home />
        <DefineVerify />
        <Decentralized />
        <Composable />
        <ChainAgnostic />
      </Container>
    </div>
  );
}

export default App;
