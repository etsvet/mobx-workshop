import React, {useState} from 'react';
import logo from './logo.svg';
import {Jumbotron, Nav, Tab, Tabs} from 'react-bootstrap';

import { TodoPage, WeatherPage } from './pages/'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const TAB_NAMES = {
  TODO: 'todo',
  WEATHER: 'weather'
}


function App() {
  const [activeTab, setActiveTab] = useState('');

  return (
      <div className="App">
        <Jumbotron>
          <h1>Mobx workshop</h1>
          <p>
            Bellow you will find 2 mini apps: Todo List and Weather Forecast
          </p>

        </Jumbotron>
        <Tabs variant="tabs" activeKey={activeTab} onSelect={key => setActiveTab(key as any)}>
          <Tab title="Todo List" eventKey={TAB_NAMES.TODO} onClick={() => setActiveTab(TAB_NAMES.TODO)}>
            <TodoPage />
          </Tab>
          <Tab title="Weather" eventKey={TAB_NAMES.WEATHER} onClick={() => setActiveTab(TAB_NAMES.WEATHER)}>
            <WeatherPage />
          </Tab>
        </Tabs>
      </div>
  );
}

export default App;
