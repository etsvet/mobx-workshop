import React, {useState, createContext } from 'react';
import logo from './logo.svg';
import {Jumbotron, Nav, Tab, Tabs} from 'react-bootstrap';
import { AppStore } from './stores';
import { TodoPage, WeatherPage } from './pages/'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export const storeContext = React.createContext(AppStore);


const TAB_NAMES = {
  TODO: 'todo',
  WEATHER: 'weather'
}


function App() {
  const [activeTab, setActiveTab] = useState('');

  return (
    <storeContext.Provider value={AppStore}>
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
      </storeContext.Provider>
  );
}

export default App;
