import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import Admin from './Admin';
import { AuthContext, useAuth } from "./context/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();
  return(
    <Route
      {...rest}
      render={(props) => (
        authTokens ? (<Component {...props} />) : (<Redirect to="/login" />)
      )}
    />
  );
}

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Admin} />
        </div>
      </BrowserRouter>
  </AuthContext.Provider>
  );
}

export default App;
