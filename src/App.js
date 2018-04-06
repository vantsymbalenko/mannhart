import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Login from './containers/Login';
import PrivateWrapper from './components/Wrappers/PrivateWrappers';
import Step2 from './containers/Step2/Step2';
import { Header } from './components/Header/Header';
import './css/style.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Route exact path="/" component = { Login }/>
            <PrivateWrapper path={"/step/:id"} component = {() => <Step2 name = "name"/> } />
        </div>
    );
  }
}

export default App;
