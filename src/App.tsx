import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { AppStore } from './stores';
import { WeatherPage } from './pages/'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export const storeContext = React.createContext(AppStore);

function App() {
  return (
    <storeContext.Provider value={AppStore}>
        <div className="App">
          <Jumbotron>
            <h1>Mobx workshop</h1>
            <p>
              Bellow you will find a Weather mini app
            </p>
          </Jumbotron>

          <WeatherPage />
        </div>
      </storeContext.Provider>
  );
}

export default App;
