import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginView from './Components/Inicio.jsx';
import BackgroundPizza from './Components/Pizza.jsx';
import Navigation from './Components/Navigation.jsx'
import './Styles/Inicio.scss';
import './Styles/Pizza.scss';
import './Styles/Footer.scss';
import './Styles/Navigation.scss';
import './Styles/OrderPizza.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginView />
        </Route>
        <Route path="/pizza">
          <Navigation />
          <BackgroundPizza />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
