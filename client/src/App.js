import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/home' component={Home} />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
