import React from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './Components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>
            Ristorante Confusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu  />
    </div>
  );
}

export default App;
