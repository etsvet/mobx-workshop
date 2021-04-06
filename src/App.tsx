import React from 'react';
import logo from './logo.svg';
import { Jumbotron, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Mobx workshop</h1>
        <p>
          Bellow you will find 2 mini apps: Todo List and Weather Forecast
        </p>

      </Jumbotron>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>Todo List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Weather Forecast</Nav.Link>
        </Nav.Item>
      </Nav>


    </div>
  );
}

export default App;
